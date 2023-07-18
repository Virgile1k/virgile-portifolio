import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/Aboutme";
import HomePage from "../pages/Homepage";
import ContactUs from "../pages/Contactme";
import Page from "../pages/Portifolio";
import  DashboardPage from "../pages/Dashboard";
// import AddBlogPost from "../components/Addblogpost";
import UserManager from "../components/UserManager";
import MessagePage from "../components/Message";
// import BlogsForm from "../pages/blogs";
import BlogForm from "../components/Addblogpost";

const AppRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/BlogForm" element={<BlogForm/>}/>
      <Route path ="/MessagePage" element={<MessagePage/>}/>
      <Route path="/UserManager" element={<UserManager/>}/>
      <Route path="/page" element ={<Page/>}/>
      <Route path="/DashboardPage" element={<DashboardPage/>}/>
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      {/* <Route path="/BlogsPage" element={<BlogsPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
