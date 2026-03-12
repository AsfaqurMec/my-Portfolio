// import { Link } from 'react-router-dom';
// import logo from '../../../public/images/Preview.png';

// const Footer = () => {
//   return (
//     <footer className="border-t border-white/10 bg-slate-950/30 backdrop-blur-md">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
//           <div className="flex items-center gap-2">
//             <img className="h-9 w-auto rounded-md object-contain" src={logo} alt="Logo" />
//           </div>
//           <nav className="flex flex-wrap justify-center md:justify-end gap-8">
//             <div>
//               <h6 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Contacts</h6>
//               <div className="flex flex-col gap-1 text-sm text-slate-300">
//                 <a href="mailto:asfaqurrahman055@gmail.com" className="hover:text-violet-200 transition-colors">asfaqurrahman055@gmail.com</a>
//                 <a href="mailto:hamimhamim044@gmail.com" className="hover:text-violet-200 transition-colors">hamimhamim044@gmail.com</a>
//                 <a href="tel:01956230265" className="hover:text-violet-200 transition-colors">01956230265</a>
//                 <a href="tel:01572908354" className="hover:text-violet-200 transition-colors">01572908354</a>
//               </div>
//             </div>
//             <div>
//               <h6 className="text-sm font-semibold text-violet-200 uppercase tracking-wider mb-2">Links</h6>
//               <div className="flex flex-col gap-1 text-sm text-slate-300">
//                 <Link to="/about" className="hover:text-violet-200 transition-colors">About Me</Link>
//                 <Link to="/project" className="hover:text-violet-200 transition-colors">Projects</Link>
//                 <Link to="/skill" className="hover:text-violet-200 transition-colors">Skills</Link>
//                 <Link to="/contact" className="hover:text-violet-200 transition-colors">Contact</Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//         <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
//           © {new Date().getFullYear()} Portfolio. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import logo from "../../../public/images/Preview.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto rounded-md object-contain"
              />
              <h2 className="text-lg font-semibold text-white">
                Asfaqur Rahman
              </h2>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              MERN Stack Developer specializing in building modern,
              high-performance web applications using React, Next.js,
              Node.js, and MongoDB.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4 text-slate-400">
              <a
                href="https://github.com"
                className="hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com"
                className="hover:text-white transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://facebook.com"
                className="hover:text-white transition"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h6>

            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link to="/about" className="hover:text-white transition">
                About Me
              </Link>

              <Link to="/project" className="hover:text-white transition">
                Projects
              </Link>

              <Link to="/skill" className="hover:text-white transition">
                Skills
              </Link>

              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h6>

            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a
                href="mailto:asfaqurrahman055@gmail.com"
                className="hover:text-white transition"
              >
                asfaqurrahman055@gmail.com
              </a>

              <a
                href="tel:01956230265"
                className="hover:text-white transition"
              >
                +880 1956 230265
              </a>

              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Asfaqur Rahman. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;