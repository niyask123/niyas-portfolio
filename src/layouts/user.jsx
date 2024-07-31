import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import { Outlet } from "react-router-dom";
import ScrollBack from "../components/ScrollBack";

export const UserLayout = () => {
  return (
    <>
    <ScrollBack />
      <Header />
      <div className=" text-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};