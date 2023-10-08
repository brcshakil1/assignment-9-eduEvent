import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
