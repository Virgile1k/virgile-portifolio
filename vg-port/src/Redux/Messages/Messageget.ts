// messagesSlice.ts
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

 export interface Message {
  _id: string; // Assuming '_id' is the unique identifier for messages
  fullName: string;
  email: string;
  content: string;
}

interface MessageState {
  messages: Message[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MessageState = {
  messages: [],
  status: 'idle',
};

export const getMessage = createAsyncThunk('message/getMessage', async () => {
  const response = await axios.get<{ data: Message[] }>(
    'https://prickly-tan-uniform.cyclic.app/api/v1/message/all'
  );
  return response.data.data; // return response.data.data; if the messages are inside the 'data' field
});

export const  messagegetSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(getMessage.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default  messagegetSlice.reducer;
