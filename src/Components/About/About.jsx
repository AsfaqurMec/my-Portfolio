import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen pt-24 section-container">
      <h2 className="section-title pb-6 border-b border-white/10 mb-10">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <div className="card-light p-2 rounded-full">
            <img src="images/IMG_E4927@1x_1.jpg" alt="" className="w-24 h-24 rounded-full object-cover" />
          </div>
          <h2 className="text-xl font-semibold text-slate-100">Jr. Full Stack Developer</h2>
          <h3 className="text-lg font-heading font-semibold text-slate-100 pb-2 border-b border-white/10 w-full">Skills</h3>
          <p className="text-slate-300">Next.js | TypeScript | JavaScript | Redux | React | Node Js |  Express js | <br /> Mongoose |  MongoDB |  PostgreSQl | Prisma ORM | Docker | CI/CD</p>
          <h3 className="text-lg font-heading font-semibold text-slate-100 pb-2 border-b border-white/10 w-full">Education</h3>
          <p className="text-slate-300">Mymensingh Engineering College, Mymensingh</p>
          <p className="text-slate-300">BSc in Computer Science and Engineering</p>
          <p className="text-slate-300">November, 2022 - current</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <p className="text-xl font-semibold text-violet-200"></p>
          <p className="text-slate-300 leading-relaxed">Full Stack Developer with 2+ years of professional experience building scalable web applications 
                using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma ORM. Experienced in developing enterprise-grade SaaS platforms, 
                e-commerce systems, real-time applications, and content management systems. Skilled in REST API development, authentication & authorization, database 
                design, performance optimization, and modern software architecture. Passionate about building secure, maintainable, and high-performance web applications.</p>
          <h3 className="text-lg font-heading font-semibold text-slate-100 pb-2 border-b border-white/10 w-full">Experience</h3>
          <p className="text-slate-200"><a href="https://flexsoftr.com/our-team/" target="_blank" rel="noreferrer" className="text-violet-200 hover:text-violet-100 font-semibold underline underline-offset-2">FlexSoftr</a> , Dhaka — Jr. Full Stack Developer</p>
          <div className="space-y-1">
              <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Built scalable web applications using Next.js App Router, React, TypeScript, and Node.js.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Developed RESTful APIs and integrated third-party APIs.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Implemented role-based access control (RBAC) and secure authentication systems.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Optimized application performance, SEO, and database queries.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Worked within Agile development workflows using Git and GitHub. </p>
              </div>
          <p className="text-slate-400">May 2024 - PRESENT</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaFacebook className="h-8 w-8" /></a>
            <a href="https://github.com/AsfaqurMec" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaGithub className="h-8 w-8" /></a>
            <a href="https://www.linkedin.com/in/asfaqur-rahman-hamim" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaLinkedin className="h-8 w-8" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
