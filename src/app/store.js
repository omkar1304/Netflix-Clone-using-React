import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import paymentSlice from '../features/paymentSlice';

export const store = configureStore({
  reducer: {
    user : userSlice,
    payment : paymentSlice,
  },
});
