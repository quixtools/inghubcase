import { css } from 'lit';

export const baseDataTableStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
}
.datatable-container {
  width: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  display: block;
  background-color: var(--color-white);
  overflow-y: auto;
}
.datatable-nodata {
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
th, td {
  font-size: 0.875rem;
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid var(--color-grey-200);
}
th {
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 500;
}
td {
  font-weight: 300;
}
tbody tr:hover {
  background-color: var(--color-grey-100);
}
.table-actionbutton {
  color: var(--color-primary);
  font-size: 1.125rem;
  line-height: 1;
  margin: 0;
  padding: 0.5rem;
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
`;