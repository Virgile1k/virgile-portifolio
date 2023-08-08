import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export interface Blog {
  id:string;
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string; 
  blogDescription: string;
  publishedDate: Date;
}

 export interface BlogState {
  blogs: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs", 
  async () => {
    const response = await axios.get<{data: Blog[]}>(
      "https://prickly-tan-uniform.cyclic.app/api/v1/blog"
    );
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.blogs = action.payload.data; 
    });
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default blogsSlice;