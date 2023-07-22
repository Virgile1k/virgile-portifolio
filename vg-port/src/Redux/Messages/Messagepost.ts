import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { toast } from "react-toastify";


interface Message {
  fullName: string;
  email: string;
  content: string;
}

interface MessageState {
  message: Message | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MessageState = {
  message: null,
  status: 'idle',
};

export const postMessage = createAsyncThunk(
  'message/postMessage',
  async (message: Message) => {
    const response = await axios.post<Message>(
      ' https://prickly-tan-uniform.cyclic.app/api/v1/message', 
      message
    );
    return response.data;
  }
);

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        toast.success("message sent")
        
        state.message = action.payload;  
      })
      .addCase(postMessage.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default messageSlice.reducer;