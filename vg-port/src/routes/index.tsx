import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
import Signup from '../pages/Signup';
// import About from "../pages/Aboutme";
import HomePage from "../pages/Homepage";
import ContactUs from "../pages/Contactme";
// import BlogsPage  from "../pages/blogs";

const AppRoutes: React.FC = () => {
  const handleSignup = (name: string, email: string, password: string) => {
    // Handle signup logic here
    console.log("Signup:", name, email, password);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/ContactUs" element={<ContactUs />} />
      {/* <Route path="/Login" element={<Login />} /> */}
      <Route
        path="/Signup"
        element={<Signup onSignup={handleSignup} />}
      />
      {/* <Route path="/BlogsPage" element={<BlogsPage/>}/> */}
    </Routes>
  );
};

export default AppRoutes;
