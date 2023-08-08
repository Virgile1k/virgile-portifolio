import React from "react";
import { Blog } from "./Bloginterface2";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden border-2 p-4 border-blue-500 ml-2">
      <img
        src={blog.blogImage}
        alt={blog.blogTitle}
        className="w-full h-48 object-cover rounded-t-md"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.blogTitle}</h2>

        <p className="text-gray-700 text-sm mb-4">{blog.blogSummary}</p>

        <Link to={`/BlogsPage/${blog._id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
