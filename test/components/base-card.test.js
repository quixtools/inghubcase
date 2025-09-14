import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/base-card/index.js';

describe('<base-card>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-card></base-card>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-card>Slot content</base-card>`);
    expect(el.textContent).to.equal('Slot content');
  });

  it('updates dataKeys when data is set', async () => {
    const el = await fixture(html`<base-card></base-card>`);
    el.data = { id: 1, firstName: 'John', lastName: 'Doe' };
    await el.updateComplete;
    expect(el.dataKeys).to.deep.equal(['firstName', 'lastName']);
  });

  it('renders grid items according to data and dataHeader', async () => {
    const el = await fixture(html`<base-card></base-card>`);
    el.data = { id: 1, firstName: 'John', lastName: 'Doe' };
    el.dataHeader = { firstName: 'First Name', lastName: 'Last Name' };
    await el.updateComplete;
    const gridItems = el.shadowRoot.querySelectorAll('.grid-item');
    expect(gridItems.length).to.equal(2);
  });

  it('handles empty data gracefully', async () => {
    const el = await fixture(html`<base-card></base-card>`);
    el.data = null;
    el.dataHeader = {};
    await el.updateComplete;
    const gridItems = el.shadowRoot.querySelectorAll('.grid-item');
    expect(gridItems.length).to.equal(0);
  });
});