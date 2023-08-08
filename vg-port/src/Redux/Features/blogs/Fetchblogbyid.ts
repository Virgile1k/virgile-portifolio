 // Redux/Features/blogs/Fetchblogbyid.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Blog {
  _id:string;
  blogMainTitle: string;
  blogImage: string;
  blogDescription: string;
  blogAuthor: string;
  publishedDate: string;
}

 export interface BlogsState {
  blogs: Blog[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  loading: 'idle',
  error: null,
};

export const fetchBlogById = createAsyncThunk<Blog, string>(
  'blogs/fetchBlogById',
  async (id, thunkAPI) => {
    try {
      // Your asynchronous logic to fetch the blog by ID
      // For example:
      const response = await fetch(`https://prickly-tan-uniform.cyclic.app/api/v1/blog/${id}`);
      const data = await response.json();
      return data.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.blogs = [action.payload];
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default blogsSlice.reducer;
