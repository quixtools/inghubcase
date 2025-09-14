import { css } from 'lit';

export const baseListPanelStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
}
.base-listpanel {
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 0.375rem;
  box-sizing: border-box;
  background-color: var(--color-white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.base-listpanel ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.base-listpanel ul li {
  margin: 0;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--color-grey-200);
}
  .base-listpanel ul li:last-child {
  border-bottom: none;
}
`;