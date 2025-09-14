import { css } from 'lit';

export const basePaginationStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
}
.pagination {
  margin: 1rem 0;
  padding: 0;
  box-sizing: border-box;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  color: var(--color-grey-800);
  font-size: 0.75rem;
  line-height: 1;
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
button.direction {
  color: var(--color-primary);
  font-size: 1rem;
}
button.direction[disabled] {
  color: var(--color-grey-800);
}
button.active {
  color: var(--color-white);
  font-weight: 600;
  background-color: var(--color-primary);
}
`;