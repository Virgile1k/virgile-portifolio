import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../../blogapi";
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

export const addblog = createAsyncThunk("blogs/addblog", async (blogData) => {
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
      .addCase(addblog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addblog.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Blog  Added Successfully");
        state.blogs = action.payload;
      })
      .addCase(addblog.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default blogSlice;
