// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBlogs } from "../Redux/Features/ blogs/fethcallblogs";

// import BlogCard from "../components/Blogcard";

// const BlogPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const blogs = useSelector(state => state.blogs.blogs);
//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error fetching blogs.</div>;
//   }

//   return (
//     <div>
//       <h1>Blogs</h1>
//       {blogs.map((blog) => (
//         <BlogCard key={blog.blogMainTitle} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default BlogPage;
