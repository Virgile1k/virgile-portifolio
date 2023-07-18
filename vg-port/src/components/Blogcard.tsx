import React from "react";
import { Link } from 'react-router-dom';
interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  const publishedDate =
    blog.publishedDate instanceof Date
      ? blog.publishedDate.toDateString()
      : new Date(blog.publishedDate).toDateString();

  return (
    <>
    <div className="bg-blue-100 p-4 rounded-lg">
      <img
        src={blog.blogImage}
        alt={blog.blogTitle}
        className="w-full rounded-lg"
      />

      <h2 className="mt-2 text-lg font-medium">Title:{blog.blogTitle}</h2>

      <p className="text-gray-600">{blog.blogSummary}</p>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">{publishedDate}</p>


       
      <Link to={`/blog/${blog.id}`} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
        Read More  
      </Link>
    
      
      </div>
    </div>
    </>
  );
}