import { useState } from 'react';
import { Blog } from '../components/types/Bloginterface2';

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img 
        src={blog.blogImage}
        alt={blog.blogTitle}
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-2xl font-bold mb-2">{blog.blogTitle}</h2>
      
      <p className="text-gray-700">
        {showFull ? blog.blogSummary : `${blog.blogSummary.substring(0, 100)}...`}
        <button
          className="text-blue-500 ml-4"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? 'Show Less' : 'Read More'}
        </button>
      </p>

      <p className="text-gray-500 text-sm">
        By {blog.blogAuthor} on {blog.publishedDate.toDateString()}
      </p>
    </div>
  );
};
