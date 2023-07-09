import React from 'react';

interface BlogCardProps {
  title: string;
  author: string; 
  body: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({title, author, body, image}) => {

  return (
    <div className="bg-white rounded overflow-hidden shadow-md">
      <img 
        className="w-full"
        src={image} 
        alt="Blog" 
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>

        <p className="text-gray-700 text-base">
          {body}
        </p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {author}
        </span>
      </div>
    </div>
  );
}

export default BlogCard;