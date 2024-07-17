import './navbar.css'
import { Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {


    return (
        <div className="navbar bg-transparent fixed z-50">
        <div className="navbar-start">
        
          <a className="btn bg-transparent border-none text-slate-50  hover:bg-transparent">
           <Link to='/'> <img className='h-14 w-[75px] rounded-sm' src="../../../public/images/Preview.png" alt="" /></Link>
          </a>
        </div>
        <div className="navbar-center ">
          
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex hover:bg-transparent">
        <li><Link className='hover:bg-none' to='/about'><a className="hover:text-red-500 bg-none transform hover:scale-125 transition duration-300 hover-underline text-slate-50 text-2xl font-bold mr-3">About</a></Link></li>
        <li> <Link to='/project'><a className="hover:text-sky-500 hover:bg-transparent text-slate-50 transform hover:scale-125 transition duration-300 hover-underline text-2xl font-bold  mr-3">Projects</a></Link></li>
        <li> <Link to='/skill'><a className="hover:text-sky-500 hover:bg-transparent text-slate-50 transform hover:scale-125 transition duration-300 hover-underline text-2xl font-bold  mr-3">Skills</a></Link></li>
        <li> <Link to='/contact'><a className="hover:text-sky-500 hover:bg-transparent text-slate-50 transform hover:scale-125 transition duration-300 hover-underline text-2xl font-bold">Contact</a></Link></li>
          </ul>
          {/* <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow ">
              <li><a>Projects</a></li>
              
              <li><a>skills</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div> */}


<div className="drawer drawer-end lg:hidden justify-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn bg-transparent border-none text-slate-50 hover:bg-transparent text-2xl">
    {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>   */}
          <GiHamburgerMenu className='w-10 h-10' />    
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-lime-800 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <Link className='hover:bg-none' to='/about'> <li><a className="hover:text-red-500 transform hover:scale-110 transition duration-300 hover-underline text-slate-50 font-semibold text-xl border-b-2">About</a></li></Link>
      <Link to='/project'>   <li><a className="hover:text-red-500 transform hover:scale-110 transition duration-300 hover-underline text-slate-50 font-semibold text-xl border-b-2">Projects</a></li></Link>
        <Link to='/skill'>   <li><a className="hover:text-red-500 transform hover:scale-110 transition duration-300 hover-underline text-slate-50 font-semibold text-xl border-b-2">Skills</a></li></Link>
        <Link to='/contact'>     <li><a className="hover:text-red-500 transform hover:scale-110 transition duration-300 hover-underline text-slate-50 font-semibold text-xl border-b-2">Contact</a></li></Link>
    </ul>
  </div>
</div>



        </div>

       
      </div>
    );
};

export default Navbar;