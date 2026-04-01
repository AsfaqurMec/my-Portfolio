import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
    isActive
      ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
      : "text-stone-400 hover:text-stone-200 border border-transparent"
  }`;

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 section-container pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-8 pb-6 border-b border-stone-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-stone-100">Dashboard</h1>
              <p className="text-stone-500 text-sm mt-1">Manage projects and contact form submissions</p>
            </div>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="self-start sm:self-auto bg-stone-700 hover:bg-stone-600 text-stone-200 px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
          <nav className="flex flex-wrap gap-2">
            <NavLink to="/dashboard" end className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/dashboard/contacts" className={linkClass}>
              Contact submissions
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
