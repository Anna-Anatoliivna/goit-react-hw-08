import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {state.error = null})
          .addCase(register.fulfilled, (state, action) => {
              state.isLoggedIn = true;
              state.token = action.payload.token;
              state.user = action.payload.user;
          }).addCase(register.rejected, (state, action) => { 
              state.error = action.payload;
          }),
});

export const authReducer = authSlice.reducer;
