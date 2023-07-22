import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, deleteBlog } from "../Redux/Features/ blogs/deleteblog";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface Blog {
  id: string;
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: Date;
}

const BlogList: React.FC = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div className="bg-blue-400">
      <div className="flex flex-col bg-blue">
        <div className="grid grid-cols-6 gap-2 items-center text-center font-bold bg-gray-200 py-2 px-4">
          <div className="text-sky-600">Main Title</div>
          <div className="text-sky-600">Title</div>
          <div className="text-sky-600">Author</div>
          <div className="text-sky-600">Published Date</div>
          <div className="text-sky-600">Image</div>
          <div className="text-sky-600">Actions</div>
        </div>
        {blogs.map((blog: Blog) => (
          <div key={blog.id} className="grid grid-cols-6 gap-2 items-center text-center py-2 px-4 text-teal-50 font-bold">
            <div>{blog.blogMainTitle}</div>
            <div>{blog.blogTitle}</div>
            <div>{blog.blogAuthor}</div>
            <div>
              {blog.publishedDate instanceof Date
                ? blog.publishedDate.toDateString()
                : ""}
            </div>
            <div>
              <div
                className="w-12 h-12 rounded-full overflow-hidden ml-20 "
              >
                <img
                  src={blog.blogImage}
                  alt={blog.blogTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <IconButton onClick={() => handleDelete(blog._id)}>
                <DeleteIcon  className="text-rose-700"/>
              </IconButton >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
