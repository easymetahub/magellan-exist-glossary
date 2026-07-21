/*
  result-item.ts — Lit port of Polymer result-item.js.

  Renders one SKOS concept card returned by modules/search.xq:
    - Index badge, term, glossary label
    - Highlighted snippets (search-snippet-highlight)
    - Expandable details (definition, related/broader/narrower with
      result-item-button chips)
    - Optional grid (item.grid) — kept as a plain HTML table to avoid
      pulling in a full vaadin-grid dependency for a rarely-used branch.
  Consumers own `params`; child buttons emit `params-change` events which
  the root handles for URL sync.
*/
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './search-snippet-highlight.js';
import './result-item-button.js';

interface Related { glossary: string; label?: string; name: string; }
export interface ResultConcept {
  term: string;
  altlabel?: string;
  definition?: string[];
  related?: Related[];
  broader?: Related[];
  narrower?: Related[];
}
export interface Result {
  index: number;
  glossary: string;
  concept: ResultConcept;
  snippets?: string[];
  grid?: { columns: string[]; rows: Record<string, unknown>[] };
}

@customElement('result-item')
export class ResultItem extends LitElement {
  static styles = css`
    :host { display: block; margin: 5px 0; }
    .card {
      width: 100%;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      padding: 8px 12px;
      font-size: 12px;
    }
    .circle {
      display: inline-block;
      height: 24px;
      min-width: 24px;
      border-radius: 50%;
      background: #ddd;
      line-height: 24px;
      font-size: 10px;
      color: #555;
      text-align: center;
      padding: 0 4px;
      margin-right: 6px;
    }
    .term { font-size: 14px; font-weight: 600; }
    .glossary { color: #666; margin: 4px 0; }
    button.expand {
      appearance: none;
      border: none;
      background: none;
      color: #1565c0;
      cursor: pointer;
      padding: 6px 0;
      font: inherit;
    }
    .concept-card {
      background: #fafafa;
      border-radius: 3px;
      padding: 6px 10px;
      margin-top: 6px;
      font-size: 12px;
    }
    h5 { margin: 8px 0 4px; }
    .chips { display: flex; flex-wrap: wrap; gap: 4px; }
    table.grid { border-collapse: collapse; width: 100%; margin-top: 6px; font-size: 11px; }
    table.grid th, table.grid td {
      border: 1px solid #ddd;
      padding: 2px 6px;
      text-align: left;
    }
    table.grid tr:nth-child(even) td { background: #f6f6f6; }
  `;

  @property({ attribute: false }) item!: Result;
  @property({ attribute: false }) params: Record<string, string> = {};
  @property({ type: Boolean }) editable = false;
  @state() private _expanded = false;

  updated(changed: Map<string, unknown>) {
    if (changed.has('item')) this._expanded = false;
  }

  private _show(a?: unknown[]): boolean {
    return Array.isArray(a) && a.length > 0;
  }

  private _renderGrid() {
    const g = this.item.grid;
    if (!g) return '';
    return html`
      <table class="grid">
        <thead>
          <tr>${g.columns.map((c) => html`<th>${c}</th>`)}</tr>
        </thead>
        <tbody>
          ${g.rows.map(
            (r) => html`<tr>${g.columns.map((c) => html`<td>${(r as any)[c] ?? ''}</td>`)}</tr>`,
          )}
        </tbody>
      </table>
    `;
  }

  render() {
    const c = this.item.concept;
    return html`
      <div class="card">
        <div>
          <span class="circle">${this.item.index}</span>
          <span class="term">${c.term}</span>
        </div>
        <div class="glossary">Glossary: ${this.item.glossary}</div>
        ${(this.item.snippets ?? []).map(
          (s) => html`<search-snippet-highlight .snippet=${s}></search-snippet-highlight>`,
        )}
        ${this._renderGrid()}
        <button class="expand" @click=${() => (this._expanded = !this._expanded)}>
          ${this._expanded ? '▲ Hide details' : '▼ Show details'}
        </button>
        ${this._expanded
          ? html`
              <div class="concept-card">
                ${c.altlabel ? html`<h5>AltLabel</h5><p>${c.altlabel}</p>` : ''}
                <h5>Definition</h5>
                ${(c.definition ?? []).map((d) => html`<p>${d}</p>`)}
                ${this._show(c.related)
                  ? html`<h5>Related</h5>
                      <div class="chips">
                        ${c.related!.map(
                          (r) => html`<result-item-button
                            .item=${r}
                            .params=${this.params}
                          ></result-item-button>`,
                        )}
                      </div>`
                  : ''}
                ${this._show(c.broader)
                  ? html`<h5>Broader</h5>
                      <div class="chips">
                        ${c.broader!.map(
                          (r) => html`<result-item-button
                            .item=${r}
                            .params=${this.params}
                          ></result-item-button>`,
                        )}
                      </div>`
                  : ''}
                ${this._show(c.narrower)
                  ? html`<h5>Narrower</h5>
                      <div class="chips">
                        ${c.narrower!.map(
                          (r) => html`<result-item-button
                            .item=${r}
                            .params=${this.params}
                          ></result-item-button>`,
                        )}
                      </div>`
                  : ''}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'result-item': ResultItem;
  }
}
