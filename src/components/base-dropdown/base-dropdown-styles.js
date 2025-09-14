import { css } from 'lit';

export const baseDropDownStyles = css`
:host {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
}

.dropdown-panel {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  display: none;
  z-index: 1000;
}

.dropdown-panel[open] {
  display: block;
}
`;