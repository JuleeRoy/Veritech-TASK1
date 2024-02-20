// employeesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [], // Initial state for employees
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload; // Set employees data
    },
  },
});


const selectedEmployeeSlice = createSlice({
  name: 'selectedEmployee',
  initialState: {
    employee:[],
  }, // Initial state for selected employee
  reducers: {
    setSelectedEmployee: (state, action) => {state.employee=action.payload},
    // action.payload, // Set selected employee data
    clearSelectedEmployee: () => null, // Clear selected employee data
  },
});
export const { setEmployees } = employeesSlice.actions;
export const{setSelectedEmployee,clearSelectedEmployee}=selectedEmployeeSlice.actions;

export const employeesReducer = employeesSlice.reducer;
export const selectedEmployeeReducer = selectedEmployeeSlice.reducer;


