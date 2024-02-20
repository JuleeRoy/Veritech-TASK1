// store.js
import { configureStore } from '@reduxjs/toolkit';
import { employeesReducer, selectedEmployeeReducer } from './slices/employeesSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer, // Include selected employee slice
      // Add other reducers if needed
    
    
  },
});

export default store;
