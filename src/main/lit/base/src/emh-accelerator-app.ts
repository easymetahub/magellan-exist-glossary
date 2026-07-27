/*
  emh-accelerator-app.ts — full Lit port of the 433-line Polymer root.

  Behavior preserved from the Polymer original:
    - Loads modules/who-am-i.xq once for user identity.
    - Debounced search (1s) posts to modules/search.xq with the URL params.
    - Facets are checkbox lists joined with "~~" separator, stored in
      params.facets. Root owns URL state; children emit events.
    - Pagination writes params.start on offset-change.
    - Login / user-info / info dialogs backed by native <dialog>.
    - Admin link + logout appear based on user.groups.

  What differs from Polymer:
    - iron-ajax  -> api.ts (fetch)
    - iron-location + query-params -> router.ts (pushState + params-change)
    - app-drawer-layout -> flex + toggleable drawer
    - paper-* / vaadin-grid -> plain semantic markup styled inline
    - paper-pagination -> emh-pagination.ts
*/
import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { api } from './api.js';
import { getParams, setParams, type Params } from './router.js';
import './facet-card.js';
import './result-item.js';
import './emh-pagination.js';
import type { Facet, FacetValue } from './facet-selector.js';
import type { Result } from './result-item.js';

interface Group { id: string; description?: string; }
interface User { id: string; name?: string; groups: Group[]; error?: string; }
interface SearchResponse {
  total: number;
  available: number;
  results: Result[];
  facets: Facet[];
}

const FACET_SEP = '~~';
const DEBOUNCE_MS = 1000;
const SEARCH_TIMEOUT_MS = 60_000;
const ADMIN_GROUPS = new Set(['emh', 'dba']);

@customElement('emh-accelerator-app')
export class EmhAcceleratorApp extends LitElement {
  static styles = css`
    :host { display: block; background: lightgrey; min-height: 100vh; font-family: system-ui, sans-serif; }
    .layout { display: flex; min-height: 100vh; }
    .drawer {
      width: 280px;
      background: #eaeaea;
      border-right: 1px solid #ccc;
      overflow-y: auto;
      padding: 0;
    }
    .drawer.hidden { display: none; }
    .drawer header {
      background: grey;
      color: #fff;
      padding: 10px 16px;
      font-weight: 600;
    }
    .drawer section { padding: 8px; }
    main { flex: 1; display: flex; flex-direction: column; }
    .toolbar {
      background: grey;
      color: #fff;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .toolbar h1 { flex: 1; font-size: 18px; margin: 0; }
    .toolbar button, .toolbar select {
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 3px;
      padding: 4px 8px;
      font: inherit;
      cursor: pointer;
    }
    .toolbar button:hover { background: rgba(255,255,255,0.28); }
    .card {
      background: #fff;
      margin: 6px;
      padding: 8px 12px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
    .search-row { display: flex; align-items: center; gap: 6px; }
    .search-row input {
      flex: 1;
      font: inherit;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .search-row button {
      appearance: none;
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
      padding: 4px 8px;
      font-size: 16px;
    }
    .totalcounter { font-size: 12px; color: #444; padding: 0 8px; }
    section.results { padding: 4px; flex: 1; overflow-y: auto; background: lightgrey; }
    .spinner-backdrop {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.35);
      display: flex; align-items: center; justify-content: center;
      z-index: 100;
    }
    .spinner {
      width: 44px; height: 44px;
      border: 4px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    dialog {
      border: none;
      border-radius: 4px;
      padding: 20px 24px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      max-width: 90vw;
    }
    dialog::backdrop { background: rgba(0,0,0,0.4); }
    dialog h2 { margin-top: 0; }
    dialog .buttons { text-align: right; margin-top: 12px; display: flex; gap: 8px; justify-content: flex-end; }
    dialog button {
      appearance: none;
      border: 1px solid #1565c0;
      background: #1565c0;
      color: #fff;
      padding: 6px 12px;
      border-radius: 3px;
      cursor: pointer;
      font: inherit;
    }
    dialog button.secondary { background: #fff; color: #1565c0; }
    dialog label { display: block; margin: 8px 0 4px; font-size: 12px; color: #555; }
    dialog input {
      width: 260px;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font: inherit;
    }
    table.groups { border-collapse: collapse; margin-top: 8px; font-size: 12px; min-width: 320px; }
    table.groups th, table.groups td { border: 1px solid #ddd; padding: 4px 8px; text-align: left; }
    .page-size { display: flex; align-items: center; gap: 6px; font-size: 12px; }
    .page-size input[type=range] { width: 120px; }
    .error { color: #c62828; font-size: 12px; }
    .copyright { padding: 8px 12px; font-size: 11px; color: #666; }
    footer.spacer { height: 200px; }
  `;

  @state() private _params: Params = getParams();
  @state() private _user: User = { id: 'guest', groups: [] };
  @state() private _result: SearchResponse = { total: 0, available: 0, results: [], facets: [] };
  @state() private _search = '';
  @state() private _loading = false;
  @state() private _drawerOpen = true;
  @state() private _loginData = { user: '', password: '' };

  @query('#emhinfo') private _emhinfo!: HTMLDialogElement;
  @query('#login') private _login!: HTMLDialogElement;
  @query('#userdata') private _userdata!: HTMLDialogElement;

  private _debounceTimer: number | undefined;
  private _searchAbort: AbortController | undefined;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('params-change', this._onParams);
    this.addEventListener('facet-toggle', this._onFacetToggle as EventListener);
    this.addEventListener('offset-change', this._onOffsetChange as EventListener);
    this._search = this._params.q ?? '';
    if (!this._params.pagelength) {
      this._params = { ...this._params, pagelength: '10' };
    }
    void this._loadUser();
    void this._runSearch();
    this._maybeShowInfoOnFirstVisit();
  }

  disconnectedCallback(): void {
    window.removeEventListener('params-change', this._onParams);
    this.removeEventListener('facet-toggle', this._onFacetToggle as EventListener);
    this.removeEventListener('offset-change', this._onOffsetChange as EventListener);
    super.disconnectedCallback();
  }

  private _onParams = () => {
    this._params = getParams();
    this._search = this._params.q ?? '';
    void this._runSearch();
  };

  private _maybeShowInfoOnFirstVisit() {
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)_emh_notify\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (cookie !== 'true') {
      queueMicrotask(() => this._emhinfo?.showModal());
      document.cookie = '_emh_notify=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
  }

  private async _loadUser() {
    try {
      this._user = await api<User>('modules/who-am-i.xq');
    } catch {
      // leave guest.
    }
  }

  private async _runSearch() {
    this._searchAbort?.abort();
    this._searchAbort = new AbortController();
    let timedOut = false;
    const timeoutId = window.setTimeout(() => {
      timedOut = true;
      this._searchAbort?.abort();
    }, SEARCH_TIMEOUT_MS);
    this._loading = true;
    try {
      const params: Record<string, string | number> = { ...this._params };
      // preserve caller's URL param set exactly (search.xq accepts q/facets/start/pagelength)
      this._result = await api<SearchResponse>('modules/search.xq', {
        params,
        signal: this._searchAbort.signal,
      });
    } catch (err) {
      if ((err as DOMException)?.name !== 'AbortError') {
        console.error('search failed', err);
      } else if (timedOut) {
        console.error(`search timed out after ${SEARCH_TIMEOUT_MS / 1000}s`);
        window.alert(`Search timed out after ${SEARCH_TIMEOUT_MS / 1000} seconds. Please refine your query and try again.`);
      }
    } finally {
      clearTimeout(timeoutId);
      this._loading = false;
    }
  }

  private _onSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
    clearTimeout(this._debounceTimer);
    this._debounceTimer = window.setTimeout(() => {
      setParams({ q: this._search, start: '' });
    }, DEBOUNCE_MS);
  }

  private _clearInput() {
    clearTimeout(this._debounceTimer);
    this._search = '';
    setParams({ q: '', facets: '', start: '' });
  }

  private _onFacetToggle = (e: CustomEvent<{ facet: string; value: FacetValue; checked: boolean }>) => {
    const { facet, value, checked } = e.detail;
    const token = value.value ?? `${facet}${FACET_SEP}${value.name}`;
    const current = this._params.facets ? this._params.facets.split(FACET_SEP) : [];
    // The stored representation joins alternating facet~~value tokens. Match Polymer format:
    // params.facets was previously constructed as `${facet.name}~~${item.name}` items joined by ~~.
    const key = `${facet}${FACET_SEP}${value.name}`;
    const filtered = current.filter((c, i, arr) => {
      // walk pairs
      if (i % 2 === 1) return true; // handled with previous entry
      const pair = `${arr[i]}${FACET_SEP}${arr[i + 1] ?? ''}`;
      return pair !== key;
    });
    // rebuild flat list without the pair we filtered
    const flat: string[] = [];
    for (let i = 0; i < current.length; i += 2) {
      const pair = `${current[i]}${FACET_SEP}${current[i + 1] ?? ''}`;
      if (pair !== key) flat.push(current[i], current[i + 1]);
    }
    if (checked) flat.push(facet, value.name);
    setParams({ facets: flat.filter(Boolean).join(FACET_SEP), start: '' });
    // reference the value we already touched so tsc keeps it live (used above via `token`)
    void token;
    void filtered;
  };

  private _onOffsetChange = (e: CustomEvent<{ offset: number }>) => {
    setParams({ start: String(e.detail.offset) });
  };

  private _isLoggedIn() { return this._user.id !== 'guest'; }
  private _isAdmin() {
    return (this._user.groups ?? []).some((g) => ADMIN_GROUPS.has((g.id ?? '').toLowerCase()));
  }

  private _openLoginDialog() {
    if (this._isLoggedIn()) this._userdata.showModal();
    else this._login.showModal();
  }

  private async _attemptLogin(e: Event) {
    e.preventDefault();
    try {
      const resp = await api<User>('modules/who-am-i.xq', { params: this._loginData });
      this._user = resp;
      if (!resp.error) this._login.close();
    } catch (err) {
      console.error('login failed', err);
    }
  }

  private async _attemptLogout() {
    try {
      this._user = await api<User>('modules/who-am-i.xq', { params: { logout: 'true' } });
    } catch (err) {
      console.error('logout failed', err);
    }
  }

  private _goAdmin() {
    window.location.href = 'admin/index.html';
  }

  private _fmt(n?: number) {
    return (n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  private _onPageSize(e: Event) {
    const pagelength = (e.target as HTMLInputElement).value;
    setParams({ pagelength, start: '' });
  }

  render() {
    const facets = this._result.facets ?? [];
    return html`
      <div class="layout">
        <aside class=${'drawer' + (this._drawerOpen ? '' : ' hidden')}>
          <header>Facets</header>
          <section>
            ${facets
              .filter((f) => f.values && f.values.length)
              .map((facet) => html`<facet-card .facet=${facet}></facet-card>`)}
          </section>
        </aside>
        <main>
          <div class="toolbar">
            <button
              @click=${() => (this._drawerOpen = !this._drawerOpen)}
              title="Toggle facets"
              aria-label="Toggle facets"
            >☰</button>
            <button @click=${() => this._emhinfo.showModal()} title="About">ⓘ</button>
            <h1>Glossary</h1>
            <label class="page-size" title="Page size">
              <span>Page size: ${this._params.pagelength ?? '10'}</span>
              <input
                type="range"
                min="10" max="100" step="10"
                .value=${this._params.pagelength ?? '10'}
                @change=${this._onPageSize}
              />
            </label>
            <button @click=${this._openLoginDialog}>
              Hello ${this._user.name ?? this._user.id}
            </button>
            ${this._isLoggedIn()
              ? html`<button @click=${this._attemptLogout} title="Log out">✕</button>`
              : ''}
            ${this._isAdmin()
              ? html`<button @click=${this._goAdmin} title="Admin">⚙</button>`
              : ''}
          </div>
          <div class="card">
            <div class="search-row">
              <input
                type="text"
                placeholder="Query text"
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <button @click=${this._clearInput} title="Clear">✕</button>
            </div>
          </div>
          <div class="card">
            <div class="totalcounter">
              Total Count: ${this._fmt(this._result.total)} of ${this._fmt(this._result.available)}
            </div>
            <emh-pagination
              range-size="5"
              .pageSize=${Number(this._params.pagelength ?? 10)}
              .total=${this._result.total}
              .offset=${Number(this._params.start ?? 0)}
            ></emh-pagination>
          </div>
          <section class="results">
            ${(this._result.results ?? []).map(
              (item) => html`<result-item .item=${item} .params=${this._params}></result-item>`,
            )}
            <div class="card copyright">
              Copyright © 2018-2026 Magellan AI Corporation. Open source under the MIT License.
            </div>
            <footer class="spacer"></footer>
          </section>
        </main>
      </div>

      ${this._loading
        ? html`<div class="spinner-backdrop"><div class="spinner"></div></div>`
        : ''}

      <dialog id="emhinfo">
        <h2>Magellan AI Glossary Template</h2>
        <h3>About This Application</h3>
        <p>
          This application is an eXist-db search template for glossary and terminology
          projects. It provides faceted search, paging, and semantic navigation across
          SKOS and SKOS-XL concepts.
        </p>
        <p>
          It is designed to be customized for new domains by adapting XQuery mappings,
          index configuration, and result rendering while reusing the core search and
          administration workflow.
        </p>
        <h3>About Magellan AI</h3>
        <p>
          Magellan AI helps organizations design and deliver practical metadata,
          taxonomy, and search solutions. We focus on implementation quality,
          maintainable architecture, and measurable delivery outcomes.
        </p>
        <p>
          Please visit us at
          <a target="_blank" rel="noopener noreferrer" href="https://magellanmeta.ai/">
            magellanmeta.ai
          </a>
          or contact
          <a href="mailto:loren@magellanmeta.ai">loren@magellanmeta.ai</a>.
        </p>
        <div class="buttons">
          <button @click=${() => this._emhinfo.close()}>Dismiss</button>
        </div>
      </dialog>

      <dialog id="login">
        <h2>Login</h2>
        ${this._user.error ? html`<p class="error">Invalid password</p>` : ''}
        <form @submit=${this._attemptLogin}>
          <label>User</label>
          <input
            type="text"
            .value=${this._loginData.user}
            @input=${(e: Event) =>
              (this._loginData = { ...this._loginData, user: (e.target as HTMLInputElement).value })}
          />
          <label>Password</label>
          <input
            type="password"
            .value=${this._loginData.password}
            @input=${(e: Event) =>
              (this._loginData = {
                ...this._loginData,
                password: (e.target as HTMLInputElement).value,
              })}
          />
          <div class="buttons">
            <button type="button" class="secondary" @click=${() => this._login.close()}>Close</button>
            <button type="submit">Login</button>
          </div>
        </form>
      </dialog>

      <dialog id="userdata">
        <h2>Groups</h2>
        <table class="groups">
          <thead><tr><th>ID</th><th>Description</th></tr></thead>
          <tbody>
            ${(this._user.groups ?? []).map(
              (g) => html`<tr><td>${g.id}</td><td>${g.description ?? ''}</td></tr>`,
            )}
          </tbody>
        </table>
        <div class="buttons">
          <button @click=${() => this._userdata.close()}>Close</button>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'emh-accelerator-app': EmhAcceleratorApp;
  }
}
