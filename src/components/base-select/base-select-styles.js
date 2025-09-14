import { css } from 'lit';

export const baseSelectStyles = css`
:host {
  width: 100%;
  margin: 1rem 0;
  padding: 0 0.5rem;
  box-sizing: border-box;
  flex: 0 0 auto;
}
label {
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
}
select {
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-grey-800);
  border-radius: 0.375rem;
  outline: 0;
  box-sizing: border-box;
  background: transparent;
  will-change: border-color;
  transition: border-color 200ms ease-in-out;
}
select:focus {
  border-color: var(--color-primary);
}
`;