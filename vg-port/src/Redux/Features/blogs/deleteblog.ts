import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Blog {
  id: string;
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
  
}

const initialState: BlogState = {
  blogs: [],
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(
    "https://prickly-tan-uniform.cyclic.app/api/v1/blog"
  );
  return response.data;
});

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlogById",
  async (id: string) => {
    try {
      await axios.delete(
        `https://prickly-tan-uniform.cyclic.app/api/v1/blog/${id}`
      );
      return id; // Return the deleted blog's id
    } catch (error) {
      throw new Error("Error deleting blog");
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    });
  },
});

export default blogSlice.reducer;