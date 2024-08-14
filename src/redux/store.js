import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slice';

// Configure the store
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});