import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { projectService } from '../../services/projectService';
import img from '../../assets/Screenshot 2024-08-15 232322.png'
import img1 from '../../../public/images/Screenshot 2024-08-31 143207.png'
import img2 from '../../../public/images/Screenshot 2024-07-16 122933.png'
import img3 from '../../../public/images/Screenshot 2024-07-16 123100.png'
import img4 from '../../../public/images/Screenshot 2024-07-16 123221.png'
import img5 from '../../../public/images/Screenshot 2024-09-27 193113.png'
import img6 from '../../../public/images/masua.png'
import img7 from '../../../public/images/Screenshot 2024-12-24 024756.png'
import img8 from '../../../public/images/Screenshot 2024-12-24 025135.png'
import img9 from '../../../public/images/Screenshot 2024-12-24 025438.png'
import asl from '../../../public/images/asl.png'
import img10 from '../../../public/images/Screenshot 2025-07-03 193732.png'
import exponential from '../../../public/images/exponential.png'
import CountUp from 'react-countup';
import as from '../../../public/images/as.png';
import launch from '../../../public/images/launch.png'

const MAX_TECHNOLOGIES_TO_SHOW = 4;

const ProjectCard = ({ title, type, description, thumbnail, technologies = [] }) => (
  <div data-aos="fade-up" className="card-light overflow-hidden group">
    <div className="aspect-video overflow-hidden">
      <img
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        src={thumbnail}
        alt={title}
      />
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">{title}</h3>
        {type ? (
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">
            {type}
          </span>
        ) : null}
      </div>
      <p className="line-clamp-2 text-sm text-stone-500 mt-1">{description}</p>
      {technologies.length > 0 ? (
        <div className="flex flex-wrap gap-1 mt-3">
          {technologies.slice(0, MAX_TECHNOLOGIES_TO_SHOW).map((tech, index) => (
            <span key={`${tech}-${index}`} className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">
              {tech}
            </span>
          ))}
          {technologies.length > MAX_TECHNOLOGIES_TO_SHOW ? (
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">
              ... more
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  </div>
);

const ProjectCardLink = ({ to, children }) => {
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link to={to}>{children}</Link>;
};

const Project = () => {
    const [dbProjects, setDbProjects] = useState([]);
    const mernStaticProjects = [
      {
        to: 'https://launchmybiz.net/',
        title: 'Launch',
        type: 'Business Formation',
        description: 'LaunchMyBiz: Complete Business Formation Platform.',
        thumbnail: launch,
        technologies: ['React', 'Node Js', 'TypeScript', 'MongoDB'],
      },
      {
        to: 'https://as-global.vercel.app/',
        title: 'AS Global Styles',
        type: 'Garment',
        description: 'A garment Website using Next.js, React, MongoDB.',
        thumbnail: as,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://schedular-asl.vercel.app/',
        title: 'Smart Class Scheduler ASL',
        type: 'Schedular',
        description: 'A smart class scheduling Website using Next.js, React, MongoDB.',
        thumbnail: asl,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://exponential-du.vercel.app/',
        title: 'Exponential DU',
        type: 'Online Course',
        description: 'A online course Website using Next.js, React, MongoDB.',
        thumbnail: exponential,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://www.masuafoundation.org/',
        title: 'Masua Foundation',
        type: 'Foundation',
        description: 'A responsive Website using Next.js, React, MongoDB.',
        thumbnail: img6,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://electro-brown.vercel.app/',
        title: 'Electro',
        type: 'E-Commerce',
        description: 'A responsive E-commerce Website using Next.js, React, MongoDB.',
        thumbnail: img5,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://hospital-mu-six.vercel.app',
        title: 'MediPro',
        type: 'Hospital',
        description: 'A responsive Medical Hospital Website using Next.js, React, MongoDB.',
        thumbnail: img1,
        technologies: ['React', 'Next Js', 'MongoDB'],
      },
      {
        to: 'https://trendy-threads-clothing.web.app',
        title: 'Bostro',
        type: 'E-Commerce',
        description: 'A e-commerce clothing website for cloths. User easily wishlist, cart & purchase cloths.',
        thumbnail: img,
        technologies: ['React', 'Stripe', 'MongoDB'],
      },
      {
        to: 'https://blood-donation-1ed49.web.app',
        title: 'OneBlood!',
        type: 'Blood Donation',
        description: 'A blood donation website for searching doner and donate blood & money.',
        thumbnail: img2,
        technologies: ['React', 'Stripe', 'MongoDB'],
      },
      {
        to: 'https://resturant-7f83a.web.app',
        title: 'DineEase!',
        type: 'Resturant',
        description: 'A resturant website using MongoDB and React.',
        thumbnail: img3,
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
      {
        to: 'https://tourism-41ddf.web.app',
        title: 'ExploreEpic',
        type: 'Travel',
        description: 'A tours & travels website where user can easily find his destination.',
        thumbnail: img4,
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
      {
        to: 'https://review-book-site.netlify.app',
        title: 'Book Vibe',
        type: 'Book Review',
        description: 'A book website. Here user can read books easily & save them for later.',
        thumbnail: 'https://i.ibb.co/NsWgZGz/Screenshot-2024-07-16-123448.png',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
    ];

    const wordpressStaticProjects = [
      // {
      //   to: 'https://neosupremetech.com/',
      //   title: 'Neo Superme Tech',
      //   description: 'A responsive Website using WordPress.',
      //   thumbnail: img7,
      // },
      // {
      //   to: 'https://platinumamenity.com/',
      //   title: 'Platinum Amenity',
      //   description: 'A responsive Website using WordPress.',
      //   thumbnail: img8,
      // },
      // {
      //   to: 'https://goldenresolution.com/',
      //   title: 'Golden Resolution',
      //   description: 'A responsive Website using WordPress.',
      //   thumbnail: img9,
      // },
      {
        to: 'https://deshiohandicraft.com/',
        title: 'Deshio HandiCraft',
        description: 'A responsive Website using WordPress.',
        thumbnail: img10,
      },
    ];

    useEffect(() => {
      (async () => {
        try {
          const data = await projectService.getAllProjects();
          setDbProjects(Array.isArray(data) ? data : []);
        } catch (e) {
          setDbProjects([]);
        }
      })();
    }, []);

    return (
        <div className="min-h-screen pt-24 section-container">
             <h2 className="section-title text-center pb-4 border-b border-white/10">Projects</h2>
             <p className="text-center mt-4 text-slate-300">Below are the projects on <span className="text-violet-200 font-medium">Full Stack!</span> & <span className="text-slate-200 font-medium">WordPress</span></p>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-12">
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-violet-200"><CountUp enableScrollSpy end={12} duration={5} />+</span>
              <span className="text-sm font-medium text-slate-300">Total Projects</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-violet-200"><CountUp enableScrollSpy end={10} duration={5} />+</span>
              <span className="text-sm font-medium text-slate-300">Full Stack</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-violet-200"><CountUp enableScrollSpy end={5} duration={8} />+</span>
              <span className="text-sm font-medium text-slate-300">Next Js</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-violet-200"><CountUp enableScrollSpy end={2} duration={8} />+</span>
              <span className="text-sm font-medium text-slate-300">WordPress</span>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-slate-100 text-center mt-16 mb-8">M E R N Stack!</h2>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-auto w-full">
            {dbProjects.filter(p => p.category !== 'WordPress').map((p, idx) => (
              <ProjectCardLink key={p._id || idx} to={`/projects/${p._id}`}>
                <ProjectCard
                  title={p.title}
                  type={p.type}
                  description={p.description}
                  thumbnail={p.thumbnail}
                  technologies={p.technologies || []}
                />
              </ProjectCardLink>
            ))}

          {mernStaticProjects.map((project) => (
            <ProjectCardLink key={project.to} to={project.to}>
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                thumbnail={project.thumbnail}
                technologies={project.technologies}
              />
            </ProjectCardLink>
          ))}

             </div>
              
             <h2 className="text-3xl font-semibold text-stone-200 text-center mt-24 mb-8 ">WordPress</h2>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dbProjects.filter(p => p.category === 'WordPress').map((p, idx) => (
              <ProjectCardLink key={p._id || idx} to={`/projects/${p._id}`}>
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  thumbnail={p.thumbnail}
                />
              </ProjectCardLink>
            ))}

             {wordpressStaticProjects.map((project) => (
              <ProjectCardLink key={project.to} to={project.to}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  thumbnail={project.thumbnail}
                />
              </ProjectCardLink>
             ))}

            </div>
        </div>
    );
};

export default Project;