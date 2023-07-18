import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import User from '../../../components/types/Userinterface';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from '../../../utils/apiUtils'; 
import { useHistory } from 'react-router-dom';

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  user: null,
  status: 'idle',
};

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (userData: { fullName: string; email: string; password: string; repeatPasssword: string }) => {
    const response = await axios.post(`${BASE_URL}/api/v1/user`, userData);
    return response.data as User;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        toast.success('Signed up succesfully click the login link to login');
        history.push('/login');
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.user = null;
        console.error('Signup failed:', action.error); // Log the error for debugging purposes
        toast.error('Sign up failed');
      });
  },
});

export default userSlice.reducer;
