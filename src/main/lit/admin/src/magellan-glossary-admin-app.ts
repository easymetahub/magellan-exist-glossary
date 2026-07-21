/*
  magellan-glossary-admin-app.ts — Lit port of the 258-line Polymer admin app.

  Behavior preserved from the Polymer original:
    - Loads modules/who-am-i.xq on connect for user identity.
    - Glossaries list from modules/glossaries.xq with per-row delete
      (posts to modules/delete.xq with { glossary: id }).
    - RDF upload: multipart POST to modules/upload.xq with form field
      "my-attachment", same 300s timeout. Response glossaries/results
      shape unchanged.
    - "Groups" dialog showing user.groups id + description.
    - Back-to-home button routes to ../index.html.

  What differs from Polymer:
    - iron-ajax → api.ts (fetch)
    - vaadin-upload → native drag/drop + XHR (per-file progress preserved)
    - vaadin-grid → plain HTML tables
    - paper-dialog → native <dialog>
    - app-drawer-layout → flex layout with a slim toggleable drawer
 */
import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { api } from './api.js';
import './upload-item.js';
import type { UploadFile, UploadMessage } from './upload-item.js';

interface Group { id: string; description?: string; }
interface User { id: string; name?: string; groups: Group[]; error?: string; }

interface UploadResult {
  responseFilename?: string;
  location?: string;
  messages?: UploadMessage[];
}
interface UploadResponse {
  glossaries?: string[];
  results?: UploadResult[];
  errorResponse?: { message: string };
}

const UPLOAD_URL = '../modules/upload.xq';
const UPLOAD_FIELD = 'my-attachment';
const UPLOAD_TIMEOUT_MS = 300_000;
const ADMIN_GROUPS = new Set(['emh', 'dba']);

@customElement('magellan-glossary-admin-app')
export class MagellanGlossaryAdminApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: lightgrey;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
      color: #222;
    }
    .layout { display: flex; min-height: 100vh; }
    .drawer {
      width: 240px;
      background: #eaeaea;
      border-right: 1px solid #ccc;
      overflow-y: auto;
    }
    .drawer.hidden { display: none; }
    .drawer header {
      background: grey;
      color: #fff;
      padding: 10px 16px;
      font-weight: 600;
    }
    .drawer section { padding: 8px; min-height: 80px; }

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
    .toolbar button {
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 3px;
      padding: 4px 10px;
      font: inherit;
      cursor: pointer;
    }
    .toolbar button:hover { background: rgba(255,255,255,0.28); }
    .toolbar .user { font-size: 13px; opacity: 0.9; }

    section.content { padding: 12px; overflow: auto; }

    .card {
      background: #fff;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      padding: 12px 16px;
      margin: 0 0 12px 0;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      font-size: 13px;
    }
    .card h2 { margin: 0 0 10px 0; font-size: 16px; }

    table.grid {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    table.grid th, table.grid td {
      border: 1px solid #e0e0e0;
      padding: 6px 8px;
      text-align: left;
      vertical-align: middle;
    }
    table.grid thead th { background: #f4f4f4; }
    table.grid tbody tr:nth-child(odd) { background: #fafafa; }
    table.grid td.actions { width: 5em; text-align: center; }
    .icon-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 2px 6px;
      color: #b71c1c;
    }
    .icon-btn:hover { color: #d32f2f; }
    .empty { color: #666; font-style: italic; }

    .drop-zone {
      border: 2px dashed #bbb;
      border-radius: 6px;
      padding: 24px;
      text-align: center;
      background: #fafafa;
      color: #555;
      transition: background 120ms, border-color 120ms;
    }
    .drop-zone.dragover {
      background: #eef6ff;
      border-color: #4a90e2;
      color: #235a99;
    }
    .drop-zone input[type='file'] { display: none; }
    .drop-zone .browse {
      display: inline-block;
      margin-top: 6px;
      color: #1565c0;
      cursor: pointer;
      text-decoration: underline;
    }

    dialog {
      border: none;
      border-radius: 6px;
      padding: 16px 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.2);
      max-width: 640px;
      width: 90%;
    }
    dialog::backdrop { background: rgba(0,0,0,0.35); }
    dialog h2 { margin-top: 0; }
    dialog .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 12px;
    }
  `;

  @state() private glossaries: string[] = [];
  @state() private user: User = { id: 'guest', groups: [] };
  @state() private files: UploadFile[] = [];
  @state() private dragOver = false;
  @state() private drawerOpen = true;

  @query('#userdata') private userDialog?: HTMLDialogElement;
  @query('#fileInput') private fileInput?: HTMLInputElement;

  connectedCallback(): void {
    super.connectedCallback();
    void this.loadUser();
    void this.loadGlossaries();
  }

  private async loadUser() {
    try {
      this.user = await api<User>('../modules/who-am-i.xq');
    } catch (e) {
      console.error('who-am-i failed', e);
    }
  }

  private async loadGlossaries() {
    try {
      this.glossaries = await api<string[]>('../modules/glossaries.xq');
    } catch (e) {
      console.error('glossaries load failed', e);
      this.glossaries = [];
    }
  }

  private async deleteGlossary(id: string) {
    if (!confirm(`Delete glossary "${id}"?`)) return;
    try {
      await api('../modules/delete.xq', { params: { glossary: id } });
      await this.loadGlossaries();
    } catch (e) {
      console.error('delete failed', e);
      alert(`Failed to delete "${id}": ${(e as Error).message}`);
    }
  }

  private async logout() {
    try {
      const resp = await api<User>('../modules/who-am-i.xq', { params: { logout: true } });
      this.user = resp;
    } catch (e) {
      console.error('logout failed', e);
    }
  }

  private goHome() {
    window.location.href = '../index.html';
  }

  private isAdmin(): boolean {
    return !!this.user?.groups?.some((g) => ADMIN_GROUPS.has((g.id ?? '').toLowerCase()));
  }

  private isLoggedIn(): boolean {
    return this.user?.id !== 'guest' && !!this.user?.id;
  }

  /* ---------------- Upload handling ---------------- */

  private onFileInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files) this.queueFiles(Array.from(input.files));
    input.value = '';
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    this.dragOver = false;
    const files = e.dataTransfer?.files;
    if (files && files.length) this.queueFiles(Array.from(files));
  }

  private onDragOver(e: DragEvent) {
    e.preventDefault();
    this.dragOver = true;
  }

  private onDragLeave() {
    this.dragOver = false;
  }

  private queueFiles(files: File[]) {
    const accepted = files.filter((f) => f.name.toLowerCase().endsWith('.rdf'));
    const rejected = files.length - accepted.length;
    if (rejected > 0) {
      alert(`${rejected} file(s) skipped — only .rdf files are accepted.`);
    }
    for (const file of accepted) {
      const entry: UploadFile = {
        id: this.createUploadId(file),
        filename: file.name,
        status: 'Uploading…',
        progress: 0,
        messages: [],
      };
      this.files = [...this.files, entry];
      void this.uploadOne(file, entry.id);
    }
  }

  private createUploadId(file: File): string {
    return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}-${file.name}`;
  }

  private updateEntry(targetId: string, patch: Partial<UploadFile>) {
    this.files = this.files.map((f) => (f.id === targetId ? { ...f, ...patch } : f));
  }

  private uploadOne(file: File, entryId: string): Promise<void> {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      const form = new FormData();
      form.append(UPLOAD_FIELD, file, file.name);

      xhr.open('POST', UPLOAD_URL);
      xhr.timeout = UPLOAD_TIMEOUT_MS;

      xhr.upload.onprogress = (ev) => {
        if (!ev.lengthComputable) return;
        const progress = Math.round((ev.loaded / ev.total) * 100);
        this.updateEntry(entryId, { progress });
      };

      xhr.onerror = () => {
        this.updateEntry(entryId, {
          status: undefined,
          progress: 0,
          messages: [{ type: 'fatal', message: 'Network error during upload.' }],
        });
        resolve();
      };

      xhr.ontimeout = () => {
        this.updateEntry(entryId, {
          status: undefined,
          progress: 0,
          messages: [{ type: 'fatal', message: 'Upload timed out.' }],
        });
        resolve();
      };

      xhr.onload = () => {
        this.applyUploadResponse(entryId, xhr);
        resolve();
      };

      xhr.send(form);
    });
  }

  private applyUploadResponse(entryId: string, xhr: XMLHttpRequest) {
    let response: UploadResponse | null = null;
    try {
      response = JSON.parse(xhr.responseText) as UploadResponse;
    } catch {
      this.updateEntry(entryId, {
        status: undefined,
        progress: 0,
        messages: [{ type: 'fatal', message: `Server returned non-JSON (HTTP ${xhr.status}).` }],
      });
      return;
    }

    if (response.errorResponse) {
      this.updateEntry(entryId, {
        status: undefined,
        progress: 0,
        messages: [{ type: 'fatal', message: response.errorResponse.message }],
      });
      return;
    }

    const first = response.results?.[0];
    if (first?.responseFilename) {
      this.updateEntry(entryId, {
        status: undefined,
        progress: 100,
        responseFilename: first.responseFilename,
        location: first.location,
        messages: first.messages?.length ? first.messages : [],
      });
    } else {
      this.updateEntry(entryId, {
        status: undefined,
        progress: 100,
        messages: first?.messages ?? [],
      });
    }
    // Refresh the glossaries table — new IDs may be present.
    void this.loadGlossaries();
  }

  /* ---------------- Render ---------------- */

  render() {
    return html`
      <div class="layout">
        <aside class="drawer ${this.drawerOpen ? '' : 'hidden'}">
          <header>Drawer</header>
          <section>
            ${this.isLoggedIn()
              ? html`
                  <p style="margin: 6px 0;">
                    Signed in as <b>${this.user.id}</b>
                  </p>
                  <button @click=${() => this.userDialog?.showModal()}>
                    Groups (${this.user.groups?.length ?? 0})
                  </button>
                `
              : html`<p class="empty">Not signed in.</p>`}
          </section>
        </aside>

        <main>
          <div class="toolbar">
            <button
              title="Toggle drawer"
              @click=${() => (this.drawerOpen = !this.drawerOpen)}
            >☰</button>
            <button title="Back to app" @click=${this.goHome}>‹</button>
            <h1>Administration</h1>
            <span class="user">${this.user?.id ?? ''}</span>
            ${this.isLoggedIn()
              ? html`<button @click=${this.logout}>Log out</button>`
              : null}
          </div>

          <section class="content">
            ${!this.isLoggedIn()
              ? html`<div class="card">
                  <b>Read-only view.</b> Sign in from the main app to manage glossaries.
                </div>`
              : null}

            <div class="card">
              <h2>Glossaries</h2>
              ${this.glossaries.length
                ? html`
                    <table class="grid">
                      <thead>
                        <tr><th>ID</th><th class="actions">Actions</th></tr>
                      </thead>
                      <tbody>
                        ${this.glossaries.map(
                          (g) => html`
                            <tr>
                              <td>${g}</td>
                              <td class="actions">
                                ${this.isAdmin()
                                  ? html`<button
                                      class="icon-btn"
                                      title="Delete ${g}"
                                      @click=${() => this.deleteGlossary(g)}
                                    >🗑</button>`
                                  : html`<span class="empty">—</span>`}
                              </td>
                            </tr>
                          `
                        )}
                      </tbody>
                    </table>
                  `
                : html`<p class="empty">No glossaries loaded.</p>`}
            </div>

            <div class="card">
              <h2>Upload RDF(s)</h2>
              <div
                class="drop-zone ${this.dragOver ? 'dragover' : ''}"
                @dragover=${this.onDragOver}
                @dragleave=${this.onDragLeave}
                @drop=${this.onDrop}
                @click=${() => this.fileInput?.click()}
              >
                <div>📄 Drop your requests here (RDF files only)</div>
                <span class="browse">or browse…</span>
                <input
                  id="fileInput"
                  type="file"
                  accept=".rdf"
                  multiple
                  @change=${this.onFileInputChange}
                />
              </div>
              ${this.files.length
                ? html`
                    <h4 style="margin: 12px 0 4px 0;">Files</h4>
                    ${this.files.map(
                      (f) => html`<upload-item .item=${f}></upload-item>`
                    )}
                  `
                : null}
            </div>
          </section>
        </main>
      </div>

      <dialog id="userdata">
        <h2>Groups</h2>
        ${this.user.groups?.length
          ? html`
              <table class="grid">
                <thead>
                  <tr><th style="width: 10em;">ID</th><th>Description</th></tr>
                </thead>
                <tbody>
                  ${this.user.groups.map(
                    (g) => html`
                      <tr>
                        <td>${g.id}</td>
                        <td>${g.description ?? ''}</td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            `
          : html`<p class="empty">No groups.</p>`}
        <div class="dialog-actions">
          <button @click=${() => this.userDialog?.close()}>Close</button>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'magellan-glossary-admin-app': MagellanGlossaryAdminApp;
  }
}
