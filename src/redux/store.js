// store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employeesSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    // Add other reducers if needed
  },
});

export default store;
