// src/AppRouter.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { UserLayout } from "../layouts/user";
import UploadPage from "../pages/upload/UploadPage";
import ImageUploader from "../components/ImageUpload";
import PrivateRoute from "../components/PrivateRoute";
import AboutUs from "../pages/about/About";
import ContactUs from "../pages/contact/ContactUs";
import Projects from "../pages/projects/Projects";
import BlogTest from "../pages/blog/BlogTest";
import LoginIndex from "../pages/loginDashboard/LoginIndex";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/uploadPage" element={<PrivateRoute element={UploadPage} />} />
          <Route path="/img" element={<ImageUploader />} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/test" element={<BlogTest/>}/>
          <Route path="/login-index" element={<LoginIndex/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
