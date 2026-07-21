/*
  Copyright (c) 2019-2026. Magellan AI Corporation
  Ported from Polymer 3 to Lit 3.
 */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

export interface ResultItemBinding {
  glossary: string;
  label: string;
  name: string;
}

/**
 * `<result-item-button>` — a single glossary-scoped facet chip.
 *
 * Polymer parity: on click, emits a `params-change` CustomEvent whose
 * `detail` is `{ facets: "<glossary>~~<label>", selected: true }`.
 * Parents replace the Polymer `notify: true` two-way binding by listening
 * to `@params-change`.
 */
@customElement('result-item-button')
export class ResultItemButton extends LitElement {
  static styles = css`
    :host { display: inline-block; }
    sl-button::part(base) { padding-top: 4px; padding-bottom: 3px; }
  `;

  @property({ type: Object }) item: ResultItemBinding = { glossary: '', label: '', name: '' };

  private _selectLink = () => {
    const facets = [this.item.glossary, this.item.label].join('~~');
    this.dispatchEvent(
      new CustomEvent('params-change', {
        detail: { facets, selected: true },
        bubbles: true,
        composed: true
      })
    );
  };

  render() {
    return html`<sl-button variant="primary" size="small" @click=${this._selectLink}
      >${this.item.name}</sl-button
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'result-item-button': ResultItemButton;
  }
}
