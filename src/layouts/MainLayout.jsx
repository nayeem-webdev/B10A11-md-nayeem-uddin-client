import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="pt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
