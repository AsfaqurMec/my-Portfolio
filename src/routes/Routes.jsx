import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Skill from "../Components/Skill/Skill";
import Contact from "../Components/Contact/Contact";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              
            }, 
            {
                path: '/skill',
                element: <Skill></Skill>, 
              
            },
            {
                path: '/contact',
                element: <Contact></Contact>, 
              
            },
            {
                path: '/project',
                element: <Project></Project>, 
              
            },
            {
                path: '/about',
                element: <About></About>, 
              
            },
          ],
        },      
    ]);
    
    export default router;