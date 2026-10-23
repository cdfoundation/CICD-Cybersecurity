import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

describe('build-output', () => {
  let outDir;
  let enPage;
  let esPage;
  let css;

  before(() => {
    outDir = mkdtempSync(join(tmpdir(), 'cicd-cybersec-'));
    const result = spawnSync('hugo', ['--quiet', '--destination', outDir], {
      cwd: root,
      encoding: 'utf8',
    });
    if (result.error) {
      throw new Error('hugo not found on PATH — install it to run build-output tests');
    }
    if (result.status !== 0) {
      throw new Error('hugo build failed:\n' + result.stderr);
    }
    enPage = readFileSync(join(outDir, 'docs', 'index.html'), 'utf8');
    esPage = readFileSync(join(outDir, 'es', 'docs', 'index.html'), 'utf8');
    const cssFile = readdirSync(join(outDir, 'scss')).find((f) => /^main(\.min)?\..*\.css$/.test(f));
    css = readFileSync(join(outDir, 'scss', cssFile), 'utf8');
  });

  after(() => {
    rmSync(outDir, { recursive: true, force: true });
  });

  it('(a) toggle button and icons present in en page', () => {
    assert.ok(enPage.includes('id="td-theme-toggle"'), 'missing toggle button');
    assert.ok(enPage.includes('td-theme-toggle__icon--sun'), 'missing sun icon');
    assert.ok(enPage.includes('td-theme-toggle__icon--moon'), 'missing moon icon');
  });

  it('(b) Docsy dark-mode infrastructure present (config flag worked)', () => {
    assert.ok(enPage.includes('td-navbar__light-dark-menu'), 'missing navbar slot');
    // 'td-color-theme' is Docsy's localStorage key. It only appears in the built page inside the inline
    // pre-paint <script> that Docsy v0.13 layouts/_partials/head.html emits in <head> when
    // showLightDarkModeMenu = true (that script sets data-bs-theme before CSS loads). So its presence
    // proves the config flag enabled Docsy's dark-mode head script, not that our toggle JS ran.
    assert.ok(enPage.includes('td-color-theme'), 'missing pre-paint script');
  });

  it('(c) theme-toggle.js loaded', () => {
    assert.ok(enPage.includes('/js/theme-toggle'), 'missing script tag');
  });

  it('(d) no dropdown artifacts that would crash dark-mode.js', () => {
    assert.ok(!enPage.includes('data-bs-theme-value'), 'found data-bs-theme-value — dropdown not replaced');
    assert.ok(!enPage.includes('id="bd-theme"'), 'found id=bd-theme — dropdown not replaced');
  });

  it('(e) Spanish i18n labels present', () => {
    assert.ok(esPage.includes('Cambiar a modo oscuro'), 'missing Spanish dark-mode label');
  });

  it('(f) toggle button and icons present in es page', () => {
    assert.ok(esPage.includes('id="td-theme-toggle"'), 'missing toggle button in es');
    assert.ok(esPage.includes('td-theme-toggle__icon--sun'), 'missing sun icon in es');
    assert.ok(esPage.includes('td-theme-toggle__icon--moon'), 'missing moon icon in es');
  });

  it('(g) theme toggle uses navbar link colour, not inherited body colour', () => {
    const rule = css.match(/\.td-theme-toggle\s*\{[^}]*\}/)?.[0] ?? '';
    assert.ok(rule, 'missing .td-theme-toggle rule in built CSS');
    assert.ok(!/color:\s*inherit/.test(rule), '.td-theme-toggle must not use color: inherit (renders dark in light mode)');
    assert.match(rule, /--bs-btn-color:\s*var\(--bs-nav-link-color\)/);
  });
});
