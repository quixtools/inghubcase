import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/base-dropdown/index.js';

describe('<base-dropdown>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-dropdown></base-dropdown>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-dropdown>Menu</base-dropdown>`);
    expect(el.textContent).to.equal('Menu');
  });

  it('opens and closes when clicking the toggle', async () => {
    const el = await fixture(html`<base-dropdown>Menu</base-dropdown>`);
    const toggle = el.shadowRoot.querySelector('.dropdown-toggle');

    toggle.click();
    await el.updateComplete;
    expect(el.open).to.be.true;

    toggle.click();
    await el.updateComplete;
    expect(el.open).to.be.false;
  });
  
  it('closes when clicking outside', async () => {
    const el = await fixture(html`<base-dropdown>Menu</base-dropdown>`);
    const toggle = el.shadowRoot.querySelector('.dropdown-toggle');

    toggle.click();
    await el.updateComplete;
    expect(el.open).to.be.true;

    document.body.click();
    await el.updateComplete;
    expect(el.open).to.be.false;
  });
});