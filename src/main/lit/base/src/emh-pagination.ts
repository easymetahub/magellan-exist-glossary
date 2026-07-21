/*
  emh-pagination.ts — replacement for the abandoned `paper-pagination`
  npm package used by the Polymer app.

  Contract preserved from the original binding:
    <emh-pagination
      range-size="5"
      .pageSize=${params.pagelength}
      .total=${result.total}
      .offset=${params.start}
    ></emh-pagination>

  Emits `offset-change` with the new zero-based start offset when the
  user picks a page. The root reads it into params.start and re-runs
  the search.
*/
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('emh-pagination')
export class EmhPagination extends LitElement {
  static styles = css`
    :host { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; padding: 4px 8px; }
    button {
      appearance: none;
      border: 1px solid #ccc;
      background: #fafafa;
      color: #333;
      padding: 3px 8px;
      border-radius: 3px;
      cursor: pointer;
      font: inherit;
      min-width: 28px;
    }
    button[disabled] { opacity: 0.4; cursor: default; }
    button.current {
      background: #1565c0;
      color: #fff;
      border-color: #1565c0;
      font-weight: 600;
    }
    .ellipsis { padding: 3px 4px; color: #666; }
  `;

  @property({ type: Number, attribute: 'range-size' }) rangeSize = 5;
  @property({ type: Number }) pageSize = 10;
  @property({ type: Number }) total = 0;
  @property({ type: Number }) offset = 0;

  private get _pageCount(): number {
    if (!this.total || !this.pageSize) return 0;
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  private get _current(): number {
    if (!this.pageSize) return 1;
    return Math.floor((this.offset || 0) / this.pageSize) + 1;
  }

  private _go(page: number) {
    const count = this._pageCount;
    if (!count) return;
    const clamped = Math.min(Math.max(page, 1), count);
    const offset = (clamped - 1) * this.pageSize;
    if (offset === this.offset) return;
    this.offset = offset;
    this.dispatchEvent(
      new CustomEvent('offset-change', {
        detail: { offset, page: clamped },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _pageBtn(p: number) {
    const cur = this._current;
    return html`<button
      class=${p === cur ? 'current' : ''}
      @click=${() => this._go(p)}
      aria-current=${p === cur ? 'page' : 'false'}
    >
      ${p}
    </button>`;
  }

  render() {
    const count = this._pageCount;
    if (count <= 1) return html``;
    const cur = this._current;
    const range = Math.max(1, this.rangeSize);
    const half = Math.floor(range / 2);
    let start = Math.max(1, cur - half);
    let end = Math.min(count, start + range - 1);
    start = Math.max(1, end - range + 1);

    return html`
      <button ?disabled=${cur === 1} @click=${() => this._go(cur - 1)}>‹</button>
      ${start > 1
        ? html`${this._pageBtn(1)}${start > 2 ? html`<span class="ellipsis">…</span>` : ''}`
        : ''}
      ${Array.from({ length: end - start + 1 }, (_, i) => this._pageBtn(start + i))}
      ${end < count
        ? html`${end < count - 1 ? html`<span class="ellipsis">…</span>` : ''}${this._pageBtn(count)}`
        : ''}
      <button ?disabled=${cur === count} @click=${() => this._go(cur + 1)}>›</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'emh-pagination': EmhPagination;
  }
}
