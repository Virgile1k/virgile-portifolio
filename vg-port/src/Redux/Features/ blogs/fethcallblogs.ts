 // @ts-nocheck

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogState {
  blogs: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
}
interface Blog {
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: Date;
}

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  try {
    const response = await axios.get(
      "https://prickly-tan-uniform.cyclic.app/api/v1/blog"
    );
    return response.data as Blog[]; // Assuming the API response is an array of blogs
  } catch (error) {
    throw new Error("Error fetching blogs"); // Handle error appropriately
  }
});

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
