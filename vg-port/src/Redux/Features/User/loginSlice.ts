// // api.ts
// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { api } from './api';

// export const api = axios.create({
//   baseURL: 'https://example.com/api' 
// });

// // loginSlice.ts

// interface LoginState {
//   user: User | null;
//   token: string | null; 
//   loading: boolean;
//   error: string | null;
// }

// const initialState: LoginState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null
// };

// export const login = createAsyncThunk(
//   'login',
//   async (credentials: {email: string, password: string}, {rejectWithValue}) => {
//     try {
//       const response = await api.post('/login', credentials);
//       return response.data; 
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export default loginSlice.reducer;