import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dir, '../assets/js/theme-toggle.js'), 'utf8');

function makeCtx(initialTheme = 'light') {
  const attrs = { 'data-bs-theme': initialTheme };
  const root = {
    getAttribute: (k) => attrs[k] ?? null,
    setAttribute: (k, v) => { attrs[k] = v; },
    _attrs: attrs,
  };

  const btnAttrs = {
    'data-label-dark': 'Switch to dark mode',
    'data-label-light': 'Switch to light mode',
    'aria-label': '',
    title: '',
  };
  const listeners = {};
  const btn = {
    getAttribute: (k) => btnAttrs[k] ?? null,
    setAttribute: (k, v) => { btnAttrs[k] = v; },
    addEventListener: (evt, fn) => { listeners[evt] = fn; },
    _attrs: btnAttrs,
    _listeners: listeners,
  };

  const storage = new Map();
  const ctx = {
    document: {
      documentElement: root,
      readyState: 'complete',
      getElementById: (id) => id === 'td-theme-toggle' ? btn : null,
      addEventListener: (_evt, fn) => fn(),
    },
    localStorage: {
      setItem: (k, v) => storage.set(k, v),
      getItem: (k) => storage.get(k) ?? null,
      _store: storage,
    },
    MutationObserver: class {
      constructor(cb) { this._cb = cb; }
      observe() {}
    },
    window: {},
    _btn: btn,
    _root: root,
    _storage: storage,
  };
  return ctx;
}

describe('theme-toggle', () => {
  it('(a) click from light sets dark and updates aria-label', () => {
    const ctx = makeCtx('light');
    runInContext(src, createContext(ctx));
    ctx._btn._listeners.click();
    assert.equal(ctx._root._attrs['data-bs-theme'], 'dark');
    assert.equal(ctx._storage.get('td-color-theme'), 'dark');
    assert.equal(ctx._btn._attrs['aria-label'], 'Switch to light mode');
  });

  it('(b) second click returns to light', () => {
    const ctx = makeCtx('light');
    runInContext(src, createContext(ctx));
    ctx._btn._listeners.click();
    ctx._btn._listeners.click();
    assert.equal(ctx._root._attrs['data-bs-theme'], 'light');
    assert.equal(ctx._storage.get('td-color-theme'), 'light');
  });

  it('(c) click from dark sets light', () => {
    const ctx = makeCtx('dark');
    runInContext(src, createContext(ctx));
    ctx._btn._listeners.click();
    assert.equal(ctx._root._attrs['data-bs-theme'], 'light');
    assert.equal(ctx._storage.get('td-color-theme'), 'light');
  });

  it('(d) localStorage.setItem throwing does not prevent theme flip', () => {
    const ctx = makeCtx('light');
    ctx.localStorage.setItem = () => { throw new Error('storage blocked'); };
    runInContext(src, createContext(ctx));
    ctx._btn._listeners.click();
    assert.equal(ctx._root._attrs['data-bs-theme'], 'dark');
  });

  it('(e) missing button does not throw', () => {
    const ctx = makeCtx('light');
    ctx.document.getElementById = () => null;
    assert.doesNotThrow(() => runInContext(src, createContext(ctx)));
  });
});
