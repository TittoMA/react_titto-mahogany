import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      firstName: 'admin',
      lastName: 'min',
      email: 'admin@admin.com',
      username: 'admin',
      password: '12345678',
    },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
