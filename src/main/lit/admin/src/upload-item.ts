/*
  upload-item.ts — Lit port of the Polymer upload-item.

  Renders one file entry inside the upload queue:
    - filename + optional server-assigned responseFilename
    - progress bar while status is set
    - download link when server returned a location
    - per-file messages table (type + message)
 */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface UploadMessage {
  type: string;
  message: string;
}

export interface UploadFile {
  id: string;
  filename: string;
  status?: string;
  progress?: number; // 0..100
  responseFilename?: string;
  location?: string;
  messages?: UploadMessage[];
}

@customElement('upload-item')
export class UploadItemEl extends LitElement {
  static styles = css`
    :host { display: block; padding: 6px 0; border-bottom: 1px solid #eee; }
    .row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .term { font-size: 14px; }
    .response { color: #555; font-size: 12px; }
    .status { font-weight: 600; }
    progress { width: 100%; height: 6px; }
    a.download { text-decoration: none; }
    table.messages {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 12px;
    }
    table.messages th, table.messages td {
      border: 1px solid #ddd;
      padding: 3px 6px;
      text-align: left;
      vertical-align: top;
    }
    table.messages th { background: #f4f4f4; }
    table.messages tr.fatal td { background: #fdecea; color: #7a1c14; }
    table.messages tr.warning td { background: #fff8e1; }
  `;

  @property({ type: Object }) item: UploadFile = { id: '', filename: '' };

  render() {
    const item = this.item;
    const messages = item.messages ?? [];
    return html`
      <div class="row">
        <span class="term">${item.filename}</span>
        ${item.responseFilename
          ? html`<span class="response">→ ${item.responseFilename}</span>`
          : null}
        ${item.status
          ? html`<b class="status">${item.status}</b>`
          : null}
        ${item.location
          ? html`<a
              class="download"
              href="${item.location}"
              download="${item.responseFilename ?? item.filename}"
              title="Download response"
            >⬇︎</a>`
          : null}
      </div>
      ${item.status
        ? html`<progress
            value="${item.progress ?? 0}"
            max="100"
          ></progress>`
        : null}
      ${messages.length
        ? html`
            <table class="messages">
              <thead>
                <tr><th style="width: 6em;">Type</th><th>Message</th></tr>
              </thead>
              <tbody>
                ${messages.map(
                  (m) => html`
                    <tr class="${m.type}">
                      <td>${m.type}</td>
                      <td>${m.message}</td>
                    </tr>
                  `
                )}
              </tbody>
            </table>
          `
        : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'upload-item': UploadItemEl;
  }
}
