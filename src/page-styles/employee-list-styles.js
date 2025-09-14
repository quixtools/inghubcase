import { css } from 'lit';

export const employeeListStyles = css`
:host {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: block;
}

.page-header {
  width: 100%;
  margin: 1rem auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h1 {
  color: var(--color-primary);
  font-size: 1.5rem;
}

.page-options {
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
`;