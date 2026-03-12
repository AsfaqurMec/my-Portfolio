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
          <p className="text-slate-300">Next.js | React | Node Js | Express js | Mongoose | <br /> MongoDB |  JavaScript | BootStrap | Css | Html</p>
          <h3 className="text-lg font-heading font-semibold text-slate-100 pb-2 border-b border-white/10 w-full">Education</h3>
          <p className="text-slate-300">Mymensingh Engineering College,Mymensingh</p>
          <p className="text-slate-300">BSc in Computer Science and Engineering</p>
          <p className="text-slate-300">November, 2022 - current</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <p className="text-xl font-semibold text-violet-200">Jr. Full Stack Developer</p>
          <p className="text-slate-300 leading-relaxed">I'm Asfaqur Rahman, a Jr. Full Stack developer
            proficient in HTML, CSS, JavaScript,React,
            and Tailwind CSS. With a passion for crafting
            engaging digital experiences, I specialize in
            translating designs into seamless, responsive
            code. I'm dedicated to delivering top-notch
            solutions. Collaborative by nature, I enjoy
            working closely with designers and
            stakeholders to bring ideas to life.</p>
          <h3 className="text-lg font-heading font-semibold text-slate-100 pb-2 border-b border-white/10 w-full">Experience</h3>
          <p className="text-slate-200"><a href="https://flexsoftr.com/our-team/" target="_blank" rel="noreferrer" className="text-violet-200 hover:text-violet-100 font-semibold underline underline-offset-2">FlexSoftr</a> , Dhaka — MERN Stack Developer</p>
          <p className="text-slate-300">As a MERN Stack developer, I'll build UIs, manage state,
            optimize performance, integrate APIs, collaborate with
            teams, and ensure code quality.</p>
          <p className="text-slate-400">May 2024 - PRESENT</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaFacebook className="h-8 w-8" /></a>
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaGithub className="h-8 w-8" /></a>
            <a href="https://www.linkedin.com/in/asfaqur-rahman-hamim" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors"><FaLinkedin className="h-8 w-8" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
