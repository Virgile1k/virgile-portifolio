import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchBlogById } from "../Redux/Features/ blogs/Fetchblogbyid"; // Correct import path

export default function BlogDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchBlogById(id)); // Make sure `id` is the correct value
  }, [dispatch, id]);

  const blog = useSelector((state) => state.blogs.blogs[0]);

  return (
    <div>
      <Navbar  title="Blogs"/>
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto mt-16 ">
      {blog && (
        <>
      
          <h2 className="text-xl font-bold mb-4">{blog.blogMainTitle}</h2>
          <img
            src={blog.blogImage}
            alt="Blog Image"
            className=" m-w-lg mb-4 rounded-lg h-auto"
          />
          <p>{blog.blogDescription}</p>
          <p className="font-bold">Author:{blog.blogAuthor}</p>
          <p className="font-bold">Published Date:{blog.publishedDate}</p>
        </>
      )}
    </div>
    </div>
  );
}
