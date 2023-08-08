import { Blog } from '../components/types/Bloginterface2'; 

interface Props {
  blog: Blog;
}

export const BlogDetails = ({ blog }: Props) => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">

      <img src={blog.blogImage} alt={blog.blogTitle} className="w-full rounded-lg mb-4"/>

      <h1 className="text-3xl font-bold mb-2">{blog.blogTitle}</h1>

      <p className="text-gray-700 mb-4">{blog.blogSummary}</p>

      <p className="text-lg">{blog.blogDescription}</p>

      <p className="text-gray-500 text-sm mt-4">
        By {blog.blogAuthor} on {blog.publishedDate.toDateString()}
      </p>

    </div>
  );

};