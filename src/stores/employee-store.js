import { createStore } from 'zustand/vanilla';

import { employeeList as initialEmployees } from '../data/employee-list.js';

export const useEmployeeStore = createStore((set, get) => ({
  employees: [...initialEmployees],
  getEmployee: (id) => get().employees.find((item) => item.id === id),
  addEmployee: (newEmployee) =>
    set((state) => ({
      employees: [...state.employees, { ...newEmployee, id: Date.now() }],
    })),
  editEmployee: (id, editedEmployee) =>
    set((state) => ({
      employees: state.employees.map((item) =>
        item.id === id ? { ...item, ...editedEmployee } : item
      ),
    })),
  deleteEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((item) => item.id !== id),
    })),
}));
