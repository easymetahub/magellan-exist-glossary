/*
  Copyright (c) 2019-2026. Magellan AI Corporation
  Ported from Polymer 3 to Lit 3.
 */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import { setParams } from './router.js';

export interface ResultItemBinding {
  glossary: string;
  label: string;
  name: string;
}

/**
 * `<result-item-button>` — a single glossary-scoped facet chip.
 *
 * On click, updates query params via router.ts so the root app receives
 * the window `params-change` event and runs a new search.
 */
@customElement('result-item-button')
export class ResultItemButton extends LitElement {
  static styles = css`
    :host { display: inline-block; }
    sl-button::part(base) { padding-top: 4px; padding-bottom: 3px; }
  `;

  @property({ type: Object }) item: ResultItemBinding = { glossary: '', label: '', name: '' };

  private _selectLink = () => {
    const selectedName = this.item.name;
    const facetValue = this.item.label ?? selectedName;
    const facets = [this.item.glossary, facetValue].join('~~');
    setParams({ q: selectedName, facets, start: '' });
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
