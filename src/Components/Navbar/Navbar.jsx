import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../../public/images/Preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/project', label: 'Projects' },
  { to: '/skill', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
      <div className="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center shrink-0" aria-label="Home">
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="h-10 w-[65px] rounded-xl object-contain"
              src={logo}
              alt=""
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link-bar text-lg font-medium text-slate-300 hover:text-slate-50 transition-colors ${
                    isActive ? 'nav-active' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            {isAuthenticated && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link-bar text-lg font-medium text-slate-300 hover:text-slate-50 transition-colors ${
                    isActive ? 'nav-active' : ''
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}
          </nav>

          <div className="lg:hidden">
            <div className="drawer drawer-end">
              <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="nav-drawer"
                  className="btn btn-ghost btn-square text-slate-300 hover:text-slate-50 hover:bg-white/5"
                  aria-label="Open menu"
                >
                  <GiHamburgerMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="nav-drawer" aria-label="Close menu" className="drawer-overlay" />
                <ul className="menu p-6 w-72 min-h-full bg-slate-950/90 backdrop-blur-xl border-l border-white/10">
                  {navLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        onClick={() => document.getElementById('nav-drawer')?.click()}
                        className="text-slate-200 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  {isAuthenticated && (
                    <li>
                      <Link
                        to="/dashboard"
                        onClick={() => document.getElementById('nav-drawer')?.click()}
                        className="text-slate-200 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
