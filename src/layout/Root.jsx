import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="text-slate-100">
      <Navbar />
      <main className="w-full px-0 lg:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
