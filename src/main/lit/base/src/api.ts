/*
  Thin fetch wrapper replacing iron-ajax.
  - Same-origin XHR against eXist (relative URLs), JSON in/out.
  - AbortController lets callers cancel in-flight searches, matching
    iron-ajax's `lastRequest.abort()` behavior in emh-accelerator-app.
 */
export interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

function qs(params: ApiOptions['params']): string {
  if (!params) return '';
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    usp.set(k, String(v));
  }
  const s = usp.toString();
  return s ? `?${s}` : '';
}

export async function api<T = unknown>(url: string, opts: ApiOptions = {}): Promise<T> {
  const { method = 'GET', params, body, headers = {}, signal } = opts;
  const init: RequestInit = { method, signal, headers: { Accept: 'application/json', ...headers } };
  if (body !== undefined) {
    (init.headers as Record<string, string>)['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }
  const res = await fetch(url + qs(params), init);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${method} ${url} failed [${res.status}]: ${text}`);
  }
  const ct = res.headers.get('content-type') ?? '';
  return (ct.includes('application/json') ? await res.json() : ((await res.text()) as unknown)) as T;
}
