import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 650,
      delay: 0,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: () =>
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

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
