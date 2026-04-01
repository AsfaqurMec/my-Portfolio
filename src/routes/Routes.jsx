import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Skill from "../Components/Skill/Skill";
import Contact from "../Components/Contact/Contact";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import DashboardContacts from "../Components/Dashboard/DashboardContacts";
import ProtectedRoute from "../Components/Auth/ProtectedRoute";
import Login from "../Components/Auth/Login";
import ProjectDetail from "../Components/Project/ProjectDetail/ProjectDetail";

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
            {
                path: '/login',
                element: <Login></Login>, 
              
            },
            {
                path: '/dashboard',
                element: (
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                ),
                children: [
                  { index: true, element: <Dashboard /> },
                  { path: 'contacts', element: <DashboardContacts /> },
                ],
            },
            {
                path: '/projects/:id',
                element: <ProjectDetail></ProjectDetail>,
            },
          ],
        },      
    ]);
    
    export default router;