 // @ts-nocheck
 // userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  users: [],
  status: 'idle',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>(
    'https://prickly-tan-uniform.cyclic.app/api/v1/user/all'
  );
  return response.data.data;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default userSlice;
