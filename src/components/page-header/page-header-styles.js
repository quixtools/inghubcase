import { css } from 'lit';

export const pageHeaderStyles = css`
:host {
  width: 100%;
  margin: 1rem auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

::slotted(h1) {
  color: var(--color-primary);
  font-size: 1.5rem;
}

::slotted(.page-options) {
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
`;