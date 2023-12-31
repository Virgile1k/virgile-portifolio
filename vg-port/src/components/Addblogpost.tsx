// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addBlog } from "../Redux/Features/blogs/addblog";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import {FormEvent} from "react";
// function BlogForm() {
//   const dispatch = useDispatch();

//   const [blogMainTitle, setBlogMainTitle] = useState("");
//   const [blogTitle, setBlogTitle] = useState("");
//   const [blogAuthor, setBlogAuthor] = useState("");
//   const [blogImage, setBlogImage] = useState("");
//   const [blogSummary, setBlogSummary] = useState("");
//   const [blogContent, setBlogContent] = useState(""); // New state for content
//   const [publishedDate, setPublishedDate] = useState("");

//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       await dispatch(
//         addBlog({
//           blogMainTitle,
//           blogTitle,
//           blogAuthor,
//           blogImage,
//           blogSummary,
//           blogDescription: blogContent,
//           publishedDate,
//         })
//       );

//       toast.success("Blog added successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       // Clear form fields after successful submission
//       setBlogMainTitle("");
//       setBlogTitle("");
//       setBlogAuthor("");
//       setBlogImage("");
//       setBlogSummary("");
//       setBlogContent("");
//       setPublishedDate("");
//     } catch (error) {
//       toast.error("Error adding blog. Please try again.", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }

//     setIsLoading(false);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-lg font-medium mb-4">Create New Blog Post</h2>
//       <ToastContainer />

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Main Title"
//           value={blogMainTitle}
//           onChange={(e) => setBlogMainTitle(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400"
//         />
//       </div>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={blogTitle}
//           onChange={(e) => setBlogTitle(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400"
//         />
//       </div>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Author"
//           value={blogAuthor}
//           onChange={(e) => setBlogAuthor(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400"
//         />
//         <div className="mb-4">
//         <input
//           type="text"
//           placeholder="ImageUrl"
//           value={blogImage}
//           onChange={(e) => setBlogImage(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400"
//         />
//       </div>
//       </div>

//       <div className="mb-4">
//         <textarea
//           placeholder="Summary"
//           value={blogSummary}
//           onChange={(e) => setBlogSummary(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400"
//         ></textarea>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Content
//         </label>
//         <ReactQuill
//           value={blogContent}
//           onChange={setBlogContent}
//           className="quill-editor" // You can define a custom CSS class for styling the editor
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Published Date
//         </label>
//         <input
//           type="date"
//           value={publishedDate}
//           onChange={(e) => setPublishedDate(e.target.value)}
//           className="w-full rounded-md border border-gray-300 p-3 text-sm"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
//         disabled={isLoading}
//       >
//         {isLoading ? "Adding..." : "Add Blog"}
//       </button>
//     </form>
//   );
// }

// export default BlogForm;
