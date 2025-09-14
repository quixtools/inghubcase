import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { msg } from '@lit/localize';
import * as z from 'zod';

import '../components/page-header/index.js';
import '../components/page-content/index.js';
import '../components/base-input/index.js';
import '../components/base-select/index.js';
import '../components/base-button/index.js';
import '../components/layout/base-container.js';
import '../components/layout/base-row.js';
import '../components/layout/base-col.js';

import { useEmployeeStore } from '../stores/employee-store.js';
import { formatDateForInput } from '../utils/date-utils.js';
import { formDepartmentData, formPositionData } from '../data/form-data.js';

import { employeeFormStyles } from '../page-styles/employee-form-styles.js';
import { spacingStyles } from '../global-styles/spacing-styles.js';

const employeeValidations = z.object({ 
  inputFirstName: z.string().min(5, 'Minimum 5 characters.'),
  inputLastName: z.string().min(5, 'Minimum 5 characters.'),
  inputEmployementDate: z.iso.date(),
  inputBirthDate: z.iso.date(),
  inputPhone: z.stringFormat("phone", /^\+\d{2,}\s\(\d{3}\)\s\d{3}\s\d{4}$/),
  inputEmail: z.string().email('Please enter a valid email'),
});

export class EmployeeForm extends LitElement {

  static styles = [employeeFormStyles, spacingStyles];

  static properties = {
    employeeId: { type: String },
    isEditMode: { type: Boolean },
    employeeObject: { type: Object },
    errorList: { type: Object }
  };

  constructor() {
    super();
    this.employeeId = null;
    this.isEditMode = false;
    this.employeeObject = {
      inputFirstName: '',
      inputLastName: '',
      inputEmployementDate: '',
      inputBirthDate: '',
      inputPhone: '',
      inputEmail: '',
      inputDeparment: 'Analytics',
      inputPosition: 'Junior',
    }
    this.errorList = {};
  }

  onBeforeEnter(location) {
    if (location.params.id) {
      this.isEditMode = true;
      this.employeeId = Number(location.params.id);
      const employeeToEdit = useEmployeeStore.getState().getEmployee(this.employeeId);
      this.employeeObject = {
        inputFirstName: employeeToEdit.firstName,
        inputLastName: employeeToEdit.lastName,
        inputEmployementDate: formatDateForInput(employeeToEdit.employmentDate),
        inputBirthDate: formatDateForInput(employeeToEdit.birthDate),
        inputPhone: employeeToEdit.phone,
        inputEmail: employeeToEdit.email,
        inputDeparment: employeeToEdit.department,
        inputPosition: employeeToEdit.position,
      };
    } else {
      this.isEditMode = false;
      this.employeeId = null;
    }
  }

  validateField(fieldName, value) {
    const result = employeeValidations.shape[fieldName].safeParse(value);
    if (result.success) {
      const newErrors = { ...this.errorList };
      delete newErrors[fieldName];
      this.errorList = newErrors; 
    } else {
      this.errorList = {...this.errorList, [fieldName]: result.error.issues[0].message}
    }
  }

  handleSaveEmployee() {
    const result = employeeValidations.safeParse(this.employeeObject);
    if (result.success) {
      if (this.isEditMode) {
        this.editSelectedEmployee();
      } else {
        this.saveNewEmployee();
      }
    } else {
      result.error.issues.forEach(item => {
        this.errorList = {...this.errorList, [item.path[0]]: item.message};
      });
    }
  }

  saveNewEmployee() {
    const employeeToAdd = {
      firstName: this.employeeObject.inputFirstName,
      lastName: this.employeeObject.inputLastName,
      employmentDate: new Date(this.employeeObject.inputEmployementDate).toLocaleDateString('en-GB'),
      birthDate: new Date(this.employeeObject.inputBirthDate).toLocaleDateString('en-GB'),
      phone: this.employeeObject.inputPhone,
      email: this.employeeObject.inputEmail,
      department: this.employeeObject.inputDeparment,
      position: this.employeeObject.inputPosition,
    };
    useEmployeeStore.getState().addEmployee(employeeToAdd);
    Router.go('/employee-list');
  }

  editSelectedEmployee() {
    if (this.employeeId) {
      const employeeToEdit = {
        firstName: this.employeeObject.inputFirstName,
        lastName: this.employeeObject.inputLastName,
        employmentDate: new Date(this.employeeObject.inputEmployementDate).toLocaleDateString('en-GB'),
        birthDate: new Date(this.employeeObject.inputBirthDate).toLocaleDateString('en-GB'),
        phone: this.employeeObject.inputPhone,
        email: this.employeeObject.inputEmail,
        department: this.employeeObject.inputDeparment,
        position: this.employeeObject.inputPosition,
      };
      useEmployeeStore.getState().editEmployee(this.employeeId, employeeToEdit);
      Router.go('/employee-list');
    }
  }

  handleCancel() {
    Router.go('/employee-list');
  }

  render() {
    return html`
      <page-header>
        <h1>${this.isEditMode ? msg('Edit') : msg('New')} ${msg('Employee')}</h1>
      </page-header>
      <page-content>
        <div id="employee-form-box">
          <base-container>
            <base-row>
              <base-col>
                <base-input
                  label="${msg('First Name')}"
                  name="inputFirstName"
                  .value=${this.employeeObject.inputFirstName}
                  .error=${this.errorList.inputFirstName}
                  @value-changed=${(e) => this.employeeObject.inputFirstName = e.detail.value}
                  @blur=${(e) => this.validateField('inputFirstName', e.target.value)}
                ></base-input>
              </base-col>
              <base-col>
                <base-input
                  label="${msg('Last Name')}"
                  name="inputLastName"
                  .value=${this.employeeObject.inputLastName}
                  .error=${this.errorList.inputLastName}
                  @value-changed=${(e) => this.employeeObject.inputLastName = e.detail.value}
                  @blur=${(e) => this.validateField('inputLastName', e.target.value)}
                ></base-input>
              </base-col>
              <base-col>
                <base-input
                  label="${msg('Date of Employment')}"
                  type="date"
                  name="inputEmployementDate"
                  .value=${this.employeeObject.inputEmployementDate}
                  .error=${this.errorList.inputEmployementDate}
                  @value-changed=${(e) => this.employeeObject.inputEmployementDate = e.detail.value}
                  @blur=${(e) => this.validateField('inputEmployementDate', e.target.value)}
                ></base-input>
              </base-col>
            </base-row>
            <base-row>
              <base-col>
                <base-input
                  label="${msg('Date of Birth')}"
                  type="date"
                  name="inputBirthDate"
                  .value=${this.employeeObject.inputBirthDate}
                  .error=${this.errorList.inputBirthDate}
                  @value-changed=${(e) => this.employeeObject.inputBirthDate = e.detail.value}
                  @blur=${(e) => this.validateField('inputBirthDate', e.target.value)}
                ></base-input>
              </base-col>
              <base-col>
                <base-input
                  label="${msg('Phone')} +(##) ### ### ####"
                  type="tel"
                  name="inputPhone"
                  placeholder="+(##) ### ### ####"
                  .value=${this.employeeObject.inputPhone}
                  .error=${this.errorList.inputPhone}
                  @value-changed=${(e) => this.employeeObject.inputPhone = e.detail.value}
                  @blur=${(e) => this.validateField('inputPhone', e.target.value)}
                ></base-input>
              </base-col>
              <base-col>
                <base-input
                  label="${msg('Email')}"
                  type="email"
                  name="inputEmail"
                  .value=${this.employeeObject.inputEmail}
                  .error=${this.errorList.inputEmail}
                  @value-changed=${(e) => this.employeeObject.inputEmail = e.detail.value}
                  @blur=${(e) => this.validateField('inputEmail', e.target.value)}
                ></base-input>
              </base-col>
            </base-row>
            <base-row>
              <base-col>
                <base-select
                  label="${msg('Department')}"
                  .value=${this.employeeObject.inputDeparment}
                  .options=${formDepartmentData}
                  @value-changed=${(e) => this.employeeObject.inputDeparment = e.detail.value}
                ></base-select>
              </base-col>
              <base-col>
                <base-select
                  label="${msg('Position')}"
                  .value=${this.employeeObject.inputPosition}
                  .options=${formPositionData}
                  @value-changed=${(e) => this.employeeObject.inputPosition = e.detail.value}
                ></base-select>
              </base-col>
            </base-row>
          </base-container>
          <div class="form-box-buttoncontainer">
            <base-button class="secondary outlined wide mt-3" @click=${this.handleCancel}>${msg('Cancel')}</base-button>
            <base-button class="primary wide mt-3" @click=${this.handleSaveEmployee}>${msg('Save')}</base-button>
          </div>
        </div>
      </page-content>
    `;
  }
}

customElements.define('employee-form', EmployeeForm);