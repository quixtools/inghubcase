import { LitElement, html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { setLocale } from '../../utils/localization.js';

import '../ing-logo.js';
import '../base-button/index.js';
import '../base-listpanel/index.js';
import '../base-dropdown/index.js';

import { pageNavigationStyles } from './page-nav-styles.js';

export class PageNavigation extends LitElement {

  static styles = [pageNavigationStyles];

  static properties = {
    langList: { type: Array },
    flagList: { type: Object },
    flagForLanguage: { type: String },
  };

  constructor() {
    super();
    this.langList = [
      { label: 'English', actionToTake: (item) => this.setLanguage(item), type: 'action', langCode: 'en' },
      { label: 'Türkçe', actionToTake: (item) => this.setLanguage(item), type: 'action', langCode: 'tr' },
    ];
    this.flagList = {
      en: { url: 'https://flagcdn.com/16x12/gb.png', alt: 'UK Flag' },
      tr: { url: 'https://flagcdn.com/16x12/tr.png', alt: 'Turkey Flag' },
    }
    this.flagForLanguage = '';
    this.setLanguage(document.documentElement.lang);
    updateWhenLocaleChanges(this);
  }

  handleLanguageListClick(e) {
    const item = e.detail;
    if (item.type === 'action') {
      item.actionToTake(item.langCode);
    }
  }

  setLanguage(item) {
    this.flagForLanguage = item;
    setLocale(item);
  }

  render() {
    return html`
      <header>
        <div id="header-logocontainer">
          <ing-logo></ing-logo><span>ING</span>
        </div>
        <nav id="header-optionscontainer">
          <a class="options-link" href="/"><icon-quix icon="questionmark-circle-filled"></icon-quix></a>
          <a class="options-link" href="/employee-list"><icon-quix icon="user-group-filled"></icon-quix> <span>${msg('Employees')}</span></a>
          <a class="options-link" href="/employee-form"><icon-quix icon="plus"></icon-quix> <span>${msg('Add New')}</span></a>
          <base-dropdown .items=${this.langList} @dropdown-select=${this.handleLanguageListClick}>
            <base-button class="primary text">
              <img src=${this.flagList[this.flagForLanguage].url} width="16" alt=${this.flagList[this.flagForLanguage].alt} />
            </base-button>
          </base-dropdown>
        </nav>
      </header>
    `;
  }
}

customElements.define('page-nav', PageNavigation);