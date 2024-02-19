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

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
