import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export interface BlogState {
  blogs: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface Blog {
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: string;
}

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

export const addBlog = createAsyncThunk("blogs/addBlog", async (blogData: Blog) => {
  const response = await axios.post(
    "https://prickly-tan-uniform.cyclic.app/api/v1/blog",
    blogData
  );
  return response.data;
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Add other standard reducer logic here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBlog.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.status = "succeeded";
        toast.success("Blog Added Successfully");
        state.blogs = action.payload;
      })
      .addCase(addBlog.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default blogSlice.reducer;
