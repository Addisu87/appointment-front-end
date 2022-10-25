/* eslint-disable no-param-reassign */
import { createAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from './api';

export const getName = createAction('users/name', () =>
  JSON.parse(localStorage.getItem('user'))
);

export const loginUser = createAsyncThunk('users/login', async (name) => {
  const response = await login(name);
  return response;
});

export const logoutUser = createAsyncThunk('users/logout', () => ({
  payload: null
}));

export const signupUser = createAsyncThunk('users/singup', async (name) => {
  const response = await signup(name);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    status: null
  },
  extraReducers: {
    [getName]: (state, { payload }) => {
      state.name = payload;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.name = payload.user;
      state.status = 'success';
    },
    [loginUser.rejected]: (state) => {
      state.status = 'rejected';
    },
    [loginUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logoutUser]: (state, { payload }) => {
      state.name = payload.user;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.name = payload.user;
      state.status = 'success';
    },
    [signupUser.rejected]: (state) => {
      state.status = 'rejected';
    }
  }
});

export default userSlice.reducer;
