/*
  facet-selector.ts — Lit port of Polymer facet-selector.js.

  Renders one facet's checkbox list. Extended values (facet.extvalues) are
  hidden behind a "more..." toggle. Selection changes bubble up through a
  `facet-toggle` CustomEvent so the root component owns URL state.

  Polymer parity notes:
    - Original mutated `item.selected` directly and pushed to `selectedFacets`.
      Here we keep local `_expanded` state but delegate persistence upward,
      matching how the root emh-accelerator-app already flattens selections
      into `params.facets` via the `~~` separator.
    - The counter chip mirrors the original `.counter` float style.
*/
import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface FacetValue {
  name: string;
  count: number;
  selected?: boolean;
  value?: string; // "<facetName>~~<valueName>" — set by parent when populating
}

export interface Facet {
  name: string;
  values?: FacetValue[];
  extvalues?: FacetValue[];
  min?: number; // range facets — not handled here (Phase 2c)
}

@customElement('facet-selector')
export class FacetSelector extends LitElement {
  static styles = css`
    :host { display: block; padding-left: 5px; font-size: 12px; }
    .row {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      padding: 2px 0;
    }
    label {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    label span.name {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counter {
      background: #ddd;
      border-radius: 2px;
      padding: 0 6px;
      font-size: 11px;
      min-width: 24px;
      text-align: center;
    }
    button.toggle {
      appearance: none;
      background: none;
      border: none;
      color: #1565c0;
      cursor: pointer;
      font: inherit;
      padding: 4px 0;
    }
    button.toggle[hidden] { display: none; }
    .ext { overflow: hidden; transition: max-height 200ms ease; }
  `;

  @property({ attribute: false }) facet: Facet = { name: '', values: [] };
  @state() private _expanded = false;

  private _hasExt(): boolean {
    return !!(this.facet.extvalues && this.facet.extvalues.length > 0);
  }

  protected willUpdate(changed: PropertyValues<this>): void {
    if (changed.has('facet')) {
      // Reset expansion when a completely different facet is bound.
      this._expanded = false;
    }
  }

  private _row(v: FacetValue) {
    const key = `${this.facet.name}:${v.name}`;
    return html`
      <div class="row">
        <label title=${v.name}>
          <input
            type="checkbox"
            .checked=${!!v.selected}
            @change=${(e: Event) => this._onToggle(e, v)}
            name=${key}
          />
          <span class="name">${v.name}</span>
        </label>
        <span class="counter">${v.count}</span>
      </div>
    `;
  }

  private _onToggle(e: Event, v: FacetValue) {
    const checked = (e.target as HTMLInputElement).checked;
    v.selected = checked;
    this.dispatchEvent(
      new CustomEvent('facet-toggle', {
        detail: { facet: this.facet.name, value: v, checked },
        bubbles: true,
        composed: true,
      }),
    );
    this.requestUpdate();
  }

  render() {
    const values = this.facet.values ?? [];
    const ext = this.facet.extvalues ?? [];
    return html`
      ${values.map((v) => this._row(v))}
      <div class="ext" ?hidden=${!this._expanded}>
        ${ext.map((v) => this._row(v))}
      </div>
      <button
        class="toggle"
        ?hidden=${!this._hasExt()}
        @click=${() => (this._expanded = !this._expanded)}
      >
        ${this._expanded ? 'less…' : 'more…'}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'facet-selector': FacetSelector;
  }
}
