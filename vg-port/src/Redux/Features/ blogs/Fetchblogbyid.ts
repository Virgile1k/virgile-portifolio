// @ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Blog {
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: Date;
}

interface BlogState {
  blogs: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (_id: string) => {
    try {
      const response = await axios.get(
        `https://prickly-tan-uniform.cyclic.app/api/v1/blog/${_id}`
      );
      return response.data as Blog[];
    } catch (error) {
      throw new Error("Error fetching blog");
    }
  }
);

const fetchBlogByIdSlice = createSlice({
  name: "fetchBlogById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogById.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default fetchBlogByIdSlice.reducer;
