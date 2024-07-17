// import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Skill from "../Components/Skill/Skill";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>

           
           <div className='w-full'>
               <Outlet></Outlet>
               <About></About>
               <Skill></Skill>
               <Project></Project>
               <Contact></Contact>
            </div>
            
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;