/*
  Minimal replacement for iron-location + iron-query-params.
  Emits `params-change` on window when the query string changes,
  covering the pushState + popstate cases used by emh-accelerator-app.
 */
export type Params = Record<string, string>;

export function getParams(): Params {
  const out: Params = {};
  new URLSearchParams(location.search).forEach((v, k) => (out[k] = v));
  return out;
}

export function setParams(patch: Params, replace = false): void {
  const usp = new URLSearchParams(location.search);
  for (const [k, v] of Object.entries(patch)) {
    if (v === '' || v === undefined || v === null) usp.delete(k);
    else usp.set(k, v);
  }
  const search = usp.toString();
  const url = `${location.pathname}${search ? `?${search}` : ''}${location.hash}`;
  if (replace) history.replaceState(null, '', url);
  else history.pushState(null, '', url);
  window.dispatchEvent(new CustomEvent('params-change', { detail: getParams() }));
}

window.addEventListener('popstate', () => {
  window.dispatchEvent(new CustomEvent('params-change', { detail: getParams() }));
});
