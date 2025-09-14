import { LitElement, html, css } from "lit";

import { basePaginationStyles } from './base-pagination-styles.js';

export class BasePagination extends LitElement {

  static styles = [basePaginationStyles];

  static properties = {
    totalPages: { type: Number },
    currentPage: { type: Number }
  };

  constructor() {
    super();
    this.totalPages = 1;
    this.currentPage = 1;
  }

  goToPage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.dispatchEvent(new CustomEvent("page-change", { detail: { page }, bubbles: true, composed: true }));
  }

  buildPagination() {
    const total = Math.max(1, this.totalPages || 1);
    const current = Math.min(Math.max((this.currentPage || 1), 1), total);
    const delta = 2;

    const range = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }
    const pages = [];
    let prev = 0;
    for (const p of range) {
      if (prev && p - prev > 1) {
        pages.push('...');
      }
      pages.push(p);
      prev = p;
    }
    return pages;
  }

  render() {
    const pages = this.buildPagination();
    return html`
      <div class="pagination">
        <button class="direction" ?disabled=${this.currentPage === 1} @click=${() => this.goToPage(this.currentPage - 1)}>
          <icon-quix icon="chevron-left"></icon-quix>
        </button>
        ${pages.map(
          (page) => page === "..."
            ? html`<span>...</span>`
            : html`<button class=${page === this.currentPage ? "active" : ""} @click=${() => this.goToPage(page)}>${page}</button>`
        )}
        <button class="direction" ?disabled=${this.currentPage === this.totalPages} @click=${() => this.goToPage(this.currentPage + 1)}>
          <icon-quix icon="chevron-right"></icon-quix>
        </button>
      </div>
    `;
  }
}

customElements.define("base-pagination", BasePagination);
