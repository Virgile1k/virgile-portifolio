import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  const navigate = useNavigate();
  const publishedDate =
    blog.publishedDate instanceof Date
      ? blog.publishedDate.toDateString()
      : new Date(blog.publishedDate).toDateString();

  return (
    <div className="relative bg-blue-100 p-4 rounded-lg max-w-md">
      <img
        src={blog.blogImage}
        alt={blog.blogTitle}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="mt-2 text-lg font-medium">Title: {blog.blogTitle}</h2>

      <p className="text-gray-600">{blog.blogSummary}</p>

      <div className="absolute bottom-4 right-4">
        <p className="text-sm text-gray-500">{publishedDate}</p>

        <Link
          to={`/blog/${blog._id}`}
          className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
