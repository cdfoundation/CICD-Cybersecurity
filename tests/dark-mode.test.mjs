import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dir, '../assets/js/dark-mode.js'), 'utf8');

function makeCtx({ getItem = null, storageThrows = false, darkOS = false } = {}) {
  const attrs = { 'data-theme-init': '' };
  const domListeners = {};

  const ctx = {
    document: {
      documentElement: {
        getAttribute: (k) => attrs[k] ?? null,
        setAttribute: (k, v) => { attrs[k] = v; },
        removeAttribute: (k) => { delete attrs[k]; },
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: (evt, fn) => { domListeners[evt] = fn; },
    },
    window: {
      matchMedia: (q) => ({
        matches: q === '(prefers-color-scheme: dark)' && darkOS,
        addEventListener: () => {},
      }),
      addEventListener: (evt, fn) => { domListeners[evt] = fn; },
    },
    _attrs: attrs,
    _domListeners: domListeners,
  };

  if (storageThrows) {
    Object.defineProperty(ctx, 'localStorage', {
      get() { throw new Error('SecurityError: blocked'); },
    });
  } else {
    const store = new Map();
    if (getItem !== null) store.set('td-color-theme', getItem);
    ctx.localStorage = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => store.set(k, v),
    };
  }

  ctx.matchMedia = ctx.window.matchMedia;
  return ctx;
}

describe('dark-mode (guarded override)', () => {
  it('(a) localStorage getter throws + dark OS → applies dark, removes data-theme-init', () => {
    const ctx = makeCtx({ storageThrows: true, darkOS: true });
    assert.doesNotThrow(() => runInContext(src, createContext(ctx)));
    assert.equal(ctx._attrs['data-bs-theme'], 'dark');
    assert.ok(!('data-theme-init' in ctx._attrs));
  });

  it('(b) localStorage getter throws + light OS → applies light', () => {
    const ctx = makeCtx({ storageThrows: true, darkOS: false });
    assert.doesNotThrow(() => runInContext(src, createContext(ctx)));
    assert.equal(ctx._attrs['data-bs-theme'], 'light');
  });

  it('(c) localStorage.getItem throws (not the getter) → OS preference used', () => {
    const ctx = makeCtx({ darkOS: true });
    ctx.localStorage.getItem = () => { throw new Error('QuotaExceeded'); };
    assert.doesNotThrow(() => runInContext(src, createContext(ctx)));
    assert.equal(ctx._attrs['data-bs-theme'], 'dark');
  });

  it('(d) working storage with stored dark + light OS → stored choice wins', () => {
    const ctx = makeCtx({ getItem: 'dark', darkOS: false });
    assert.doesNotThrow(() => runInContext(src, createContext(ctx)));
    assert.equal(ctx._attrs['data-bs-theme'], 'dark');
  });

  it('(e) DOMContentLoaded handler does not throw when #bd-theme absent', () => {
    const ctx = makeCtx({ darkOS: false });
    runInContext(src, createContext(ctx));
    assert.doesNotThrow(() => {
      if (ctx._domListeners['DOMContentLoaded']) ctx._domListeners['DOMContentLoaded']();
    });
  });
});
