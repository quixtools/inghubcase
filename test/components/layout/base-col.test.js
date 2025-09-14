import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/layout/base-col.js';

describe('<base-col>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-col></base-col>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-col>Inside text</base-col>`);
    expect(el).lightDom.to.equal('Inside text');
  });
  /*
  it('styling applied', async () => {
    const el = await fixture(html`<base-col></base-col>`);
    await el.updateComplete;
    expect(getComputedStyle(el).width).to.equal('33.3333%');
  });
  */
});