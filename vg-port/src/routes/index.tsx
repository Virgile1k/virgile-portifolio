import React from "react";
import { Routes, Route } from "react-router-dom";
import  BlogList from "../components/Allblogs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/Aboutme";
import HomePage from "../pages/Homepage";
import ContactUs from "../pages/Contactme";
import Page from "../pages/Portifolio";
import DashboardPage from "../pages/Dashboard";
// import AddBlogPost from "../components/Addblogpost";
import UserManager from "../components/UserManager";
// import MessagePage from "../components/Message";
// import BlogsForm from "../pages/blogs";
import BlogForm from "../components/Addblogpost";
// import BlogsPage from "../pages/blogsPage";
import Blogs from "../components/blogs";
import BlogDetailsPage from "../components/blogdetails";
import UserList from "../components/allusers";
import Message  from "../components/Message";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/BlogForm" element={<BlogForm />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/UserManager" element={<UserManager />} />
      <Route path="/page" element={<Page />} />
      <Route path="/DashboardPage" element={<DashboardPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/fetchUsers" element={<UserList />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Allblogs" element={<BlogList/>} />
      {/* <Route path="/BlogsPage" element={<BlogsPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
