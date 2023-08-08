 /* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../Redux/Features/blogs/Fetchblogbyid";
import Navbar from "../components/Navbar";

interface Blog {
  _id: string;
  blogMainTitle: string;
  blogImage: string;
  blogDescription: string;
  blogAuthor: string;
  publishedDate: string;
}

const BlogDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams<{ blogId?: string }>(); // Make blogId optional

  const { loading, blogs, error } = useSelector(
    (state: any) => state.blogs
  ) as any;

  useEffect(() => {
    if (blogId) {
      dispatch(fetchBlogById(blogId) as any);
    }
  }, [dispatch, blogId]);

  const renderContent = () => {
    if (loading === "pending") {
      return <div className="bg-gray-100 p-4">Loading...</div>;
    } else if (loading === "failed") {
      return <div className="bg-red-200 p-4">Error: {error}</div>;
    } else if (!blogs || blogs.length === 0) {
      return <div className="bg-yellow-200 p-4">No blogs available.</div>;
    } else {
      const blog = blogs.find((b: Blog) => b._id === blogId);

      if (!blog) {
        return <div className="bg-red-200 p-4">Blog not found.</div>;
      }

      return (
        <>
          <Navbar title="Blogs" />
          <div className="flex items-center justify-center bg-black h-screen p-4">
            <div className="max-w-2xl w-full">
              <h2 className="text-3xl font-bold mb-4 text-white">{blog.blogMainTitle}</h2>
              <img
                src={blog.blogImage}
                alt={blog.blogMainTitle}
                className="mx-auto mb-4 max-h-96 object-cover rounded-lg"
              />
              <div className="border-2 border-gray-300 p-4 rounded-lg">
                <p className="mb-4 text-white">{blog.blogDescription}</p>
                <p className="text-white">Author: {blog.blogAuthor}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default BlogDetails;
