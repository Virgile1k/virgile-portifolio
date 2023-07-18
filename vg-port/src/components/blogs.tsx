import React, { useEffect } from "react"; // Don't forget to import React
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./Blogcard";
import Navbar from "../components/Navbar";

import { fetchBlogs } from "../Redux/Features/ blogs/fethcallblogs"; // Corrected the typo in the import path

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
    <Navbar title="Blogs"/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 top-">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    </>
  );
};

export default Blogs;
