import { createSlice } from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payment: true,
  },
  reducers: {
    paymentDone : (state, action) => {
        state.payment = action.payload;
    },
  },
})

export const { paymentDone } = paymentSlice.actions;

export default paymentSlice.reducer