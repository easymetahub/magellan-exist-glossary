/*
  Copyright (c) 2019-2026. Magellan AI Corporation
  Ported from Polymer 3 (@polymer/lit-element 0.6) to Lit 3.
 */
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * `<search-snippet-highlight>` renders a search-result snippet with
 * server-produced <span class="hi"> highlights preserved.
 *
 * Behavior parity with the Polymer 3 version: raw HTML pass-through.
 * TODO(security): swap to a sanitizer (e.g. DOMPurify) before enabling
 * user-authored snippet content.
 */
@customElement('search-snippet-highlight')
export class SearchSnippetHighlight extends LitElement {
  static styles = css`
    :host { display: block; }
    .hi { background-color: ${unsafeCSS('yellow')}; }
  `;

  @property({ type: String }) snippet = 'Hello <span class="hi">World</span>!';

  render() {
    return html`<div>${unsafeHTML(this.snippet)}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-snippet-highlight': SearchSnippetHighlight;
  }
}
