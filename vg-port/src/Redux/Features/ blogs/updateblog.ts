  // @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Blog {
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: string;
}

interface BlogState {
  blog: Blog | null; // Corrected the type of 'blog' property
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: BlogState = {
  blog: null,
  status: 'idle',
};

export const updateBlog = createAsyncThunk(
  'blog/updateBlog',
  async (updatedBlog: Blog, { dispatch }) => { // Pass the updated blog as the argument
    const response = await axios.patch('https://long-blue-firefly-vest.cyclic.app/api/v1/blog', updatedBlog);
    return response.data;
  }
);

export const blogSliceupdate = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(updateBlog.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogSliceupdate.reducer;
