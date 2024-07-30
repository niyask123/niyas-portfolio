import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <div className=" text-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};