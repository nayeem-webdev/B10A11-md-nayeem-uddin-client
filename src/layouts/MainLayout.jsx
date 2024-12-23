import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Loading />
      <Footer />
    </>
  );
};

export default MainLayout;
