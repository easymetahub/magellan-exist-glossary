/*
  facet-card.ts — Lit port of Polymer facet-card.js.

  Thin card wrapper around <facet-selector>. Range facets (facet.min set)
  are stubbed with a placeholder — the Polymer original also carried a
  disabled range branch. Full range support lands in Phase 2c.
*/
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './facet-selector.js';
import type { Facet } from './facet-selector.js';

@customElement('facet-card')
export class FacetCard extends LitElement {
  static styles = css`
    :host { display: block; }
    .card {
      width: 100%;
      background: #fff;
      margin: 5px 0;
      padding: 6px 8px 10px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      font-size: 12px;
    }
    .title {
      display: block;
      height: 30px;
      margin: 0 8px;
    }
    .title span {
      font-weight: 600;
      font-size: 15px;
      line-height: 30px;
    }
    .range-todo {
      color: #888;
      font-style: italic;
      padding: 4px 8px;
    }
  `;

  @property({ attribute: false }) facet: Facet = { name: '' };

  render() {
    return html`
      <div class="card">
        <div class="title"><span>${this.facet.name}</span></div>
        ${this.facet.min !== undefined
          ? html`<div class="range-todo">Range facet — Phase 2c.</div>`
          : html`<facet-selector .facet=${this.facet}></facet-selector>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'facet-card': FacetCard;
  }
}
