import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Blog } from '../components/types/Bloginterface2';

import BlogCard from '../components/types/Blogcardf';
import { fetchBlogs } from '../Redux/Features/blogs/fethcallblogs';
import Navbar from '../components/Navbar';

const BlogsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs() as any);
  }, [dispatch]);

  const blogs = useSelector((state) => (state as any).blogs.blogs as Blog[]);

  return (
    <>
      <Navbar title="Blogs" />
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
