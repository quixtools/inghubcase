import { css } from 'lit';

export const employeeFormStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  display: block;
}

#employee-form-box {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: var(--color-white);
}

.form-box-buttoncontainer {
  width: 100%;
  margin: 2rem auto 0 auto;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem
}
@media (max-width: 767px) {
  .form-box-buttoncontainer {
    display: block;
  }
}
`;