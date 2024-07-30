import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { UserLayout } from "../layouts/user";
import UploadPage from "../pages/upload/UploadPage";
import ImageUploader from "../components/ImageUpload";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/uploadPage" element={<UploadPage />} />
          <Route path="/img" element={<ImageUploader />} />

          

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
