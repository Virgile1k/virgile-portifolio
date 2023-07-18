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
  blog: Blog | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BlogState = {
  blog: null,
  status: "idle",
};

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (id: string) => {
    try {
      const response = await axios.get(
        `https://prickly-tan-uniform.cyclic.app/api/v1/blog/${id}`
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
      state.blog = action.payload.data;
    });
    builder.addCase(fetchBlogById.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default fetchBlogByIdSlice.reducer;