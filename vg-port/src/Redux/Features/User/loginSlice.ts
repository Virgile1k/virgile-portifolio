import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios, { AxiosResponse } from 'axios';
import API from '../../api';
import { toast } from 'react-toastify';

interface User {
  fullName: string;
  email: string;
  role: string;
}

interface LoginState {
  user: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

interface LoginResponse {
  token: string;
  fullName: string;
  email: string;
  role: string;
}

interface NavigationPayload {
  route: string;
}

const initialState: LoginState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const login = createAsyncThunk(
  'login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response: AxiosResponse<LoginResponse> = await API.post('/api/v1/login', credentials);
      const { token, fullName, email, role } = response.data.data;

      // Store token in local storage
      localStorage.setItem('token', token);
      console.log(response);
      console.log(fullName);
      console.log(email);
      console.log(role);

      return { fullName, email, role };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const navigateToRoute = createAsyncThunk(
  'auth/navigateToRoute',
  async (payload: NavigationPayload, thunkAPI) => {
    const { route } = payload;
    // Perform any necessary logic before navigation

    // Dispatch an action to handle navigation in your component
    thunkAPI.dispatch({ type: 'navigation/navigate', payload: { route } });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {
          fullName: action.payload.fullName,
          email: action.payload.email,
          role: action.payload.role,
        };
        toast.success('Login successful!');
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
        toast.error('Login failed!');
      });
  },
});

export default authSlice;
