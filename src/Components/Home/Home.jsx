/* eslint-disable react/no-unescaped-entities */
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './home.css'
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
import img10 from '../../../public/images/Screenshot 2025-07-03 193732.png'
import asl from '../../../public/images/asl.png'
import as from '../../../public/images/as.png'
import launch from '../../../public/images/launch.png'
import exponential from '../../../public/images/exponential.png'
import CountUp from 'react-countup';
// ..
const MAX_TECHNOLOGIES_TO_SHOW = 4;

import html from '../../../public/images/html.png'
import css from '../../../public/images/css.png'
import JavaScriptl from '../../../public/images/JavaScript-Logo.png'
import bootstrap from '../../../public/images/bootstrap.png'
import react from '../../../public/images/react.png'
import Tailwind from '../../../public/images/Tailwind_CSS_Logo.svg.png'
import node from '../../../public/images/node.png'
import express from '../../../public/images/express.png'
import mongodb from '../../../public/images/mongodb.png'
import mongoose from '../../../public/images/mongoose.png'
import redux from '../../../public/images/redux-icon-2048x1945-ahvhunxp.png'
import Typescript from '../../../public/images/Typescript.svg.png'
import mysql from '../../../public/images/hd-mysql-logo-transparent-background-701751694771788209ydqoapx-removebg-preview.png'
import postgre from '../../../public/images/Postgresql_elephant.svg.png'
import prisma from '../../../public/images/prisma-icon-size_256.png'
import next from '../../../public/images/images__6_-removebg-preview.png'
import zod from '../../../public/images/1_P1Xb4NoQ5JLqx9L8abXSSg.png'
import jwt from '../../../public/images/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com-removebg-preview.png'
import WordPress from '../../../public/images/pngimg.com - wordpress_PNG72.png'
import postman from '../../../public/images/images__3_-removebg-preview.png'
import cloudinary from '../../../public/images/cloudinary-icon8821.logowik.com-removebg-preview.png'
import nodemailer from '../../../public/images/cropped-nm_logo_1000x680.png'
import rest from '../../../public/images/free-rest-api-blue-logo-icon-22098-thumb.png'
import git from '../../../public/images/Git_icon.svg.png'
import c from '../../../public/images/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo-thumbnail-removebg-preview.png';
import java from '../../../public/images/java-coffee-cup-logo.png'
import fire from '../../../public/images/firebase-icon-logo-png_seeklogo-615938-removebg-preview.png';
import daisy from '../../../public/images/daisyui-logo-png_seeklogo-554509-removebg-preview.png';
import ant from '../../../public/images/ant-design-logo-png_seeklogo-380495.png'
import { projectService } from '../../services/projectService';
import { cleanArray, sortProjects } from '../../utils/cleanTags';
import video from '../../../public/images/bb3.mp4'
import { useRef } from "react";
import { contactService } from "../../services/contactService";


const Home = () => { 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9+()\-\s]{8,20}$/.test(formData.mobile)) {
      nextErrors.mobile = "Please enter a valid mobile number.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Description is required.";
    } else if (formData.description.trim().length < 50) {
      nextErrors.description = "Description must be at least 50 characters.";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      await contactService.sendMessage({
        ...formData,
        to: "asfaqurrahman055@gmail.com",
      });

      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        description: "",
      });
      setShowSuccessModal(true);
    } catch (error) {
      setSubmitError(error?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const [dbProjects, setDbProjects] = useState([]);

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

  const container = document.querySelector('.progress-bars');
  const progres = document.querySelector('.progres');
  const percentage = document.querySelector('.percentage');

  let bol = false;
  let count;

  window.addEventListener("scroll", () => {
    if (scrollY > container.offsetTop - 400 && bol === false) {
      for (let i = 0; i < progres.length; i++) {
        percentage.innerText = 0;
        count = 0;

        const data = parseInt(progres[i].dataset.count);

        progres[i].style.transition = "width" + (data * 30) + "ms";

        progres[i].style.width = data + "%";


        const updateCount = () => {
          if (count < data) {
            count++;
            percentage[i].innerText = count + "%";
            setTimeout(updateCount, 50);

          } else {
            percentage[i].innerText = data + "%";
          }
        }

        updateCount();

        bol = true;

      }
    }
  })


  const [text] = useTypewriter({
    words: ['Asfaqur Rahman'],
    loop: ''
  })


  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

 
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // 0.5 = half speed
    }
  }, []);


  return (
    <>
      <div>

      <section className="relative min-h-[92vh] flex items-center justify-center  overflow-hidden px-1 lg:px-0">

{/* Background Video */}
<video
 ref={videoRef}
 autoPlay
 loop
 muted
 playsInline
 preload="none"
 
 className="absolute inset-0 w-full h-full object-cover"
>
  <source src={video} type="video/mp4" />
</video>  

{/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/100 via-slate-950/85 to-slate-950/100"></div>

{/* Content */}
<div className="relative z-10 w-full px-4 sm:px-6 lg:px-6 py-24 lg:py-32">

  <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-14 lg:gap-40">

    <div className="w-full max-w-xs lg:max-w-sm flex-shrink-0">
      <div className="card-light p-2 ">
        <img
          src="images/IMG_E4927@1x_1.jpg"
          alt="Asfaqur Rahman"
          className="w-full rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[10px] rounded-br-[10px] object-cover"
        />
      </div>
    </div>
 

    <div className="text-center lg:text-left">
      <p className="text-sm font-medium tracking-wider uppercase mb-2 text-slate-300">
        Hello, I'm
      </p>

      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 tracking-tight">
        <span className="text-violet-300">Asfaqur Rahman</span>
      </h1>

      <p className="text-xl font-semibold text-slate-200 mt-3">
        Jr. Full Stack Developer
      </p>

      <p className="mt-4 text-slate-300 text-lg max-w-lg">
      Passionate about building modern, scalable, and user-friendly web applications. I create responsive front-end experiences and robust back-end solutions that bring ideas to life.
      </p>

      <a
        href="https://drive.google.com/file/d/1g_CYH_GjmmTVHI0KZP5i7aua4YTRl15q/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-medium transition-colors bg-violet-500/20 hover:bg-violet-500/30 text-violet-100 border border-white/10"
      >
        Download Resume
      </a>
      <div className="mt-8 flex justify-center lg:justify-start gap-5">
                  <a data-aos="fade-up" data-aos-delay="80" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors" aria-label="Facebook"><FaFacebook className="h-7 w-7" /></a>
                  <a data-aos="fade-up" data-aos-delay="140" href="https://github.com/AsfaqurMec" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors" aria-label="GitHub"><FaGithub className="h-7 w-7" /></a>
                  <a data-aos="fade-up" data-aos-delay="200" href="https://www.linkedin.com/in/asfaqur-rahman-hamim" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-violet-200 transition-colors" aria-label="LinkedIn"><FaLinkedin className="h-7 w-7" /></a>
       </div>
    </div>

  </div>
  <div className="wrapper mt-12 lg:mt-16">
                <div className="item item1">
                  <img src={html} alt="" />
                </div>
                <div className="item item2">
                <img src={css} alt="" />
                </div>
                <div className="item item3">
                <img src={JavaScriptl} alt="" />
                </div>
                <div className="item item4">
                <img src={bootstrap} alt="" />
                </div>
                <div className="item item5">
                <img src={react} alt="" />
                </div>
                <div className="item item6">
                <img src={Tailwind} alt="" />
                </div>
                <div className="item item7">
                <img src={node} alt="" />
                </div>
                <div className="item item8">
                <img src={express} alt="express" />
                </div>
                <div className="item item9">
                <img src={mongodb} alt="express" />
                </div>
                <div className="item item10">
                <img src={mongoose} alt="express" />
                </div>
                <div className="item item11">
                <img src={redux} alt="express" />
                </div>
                <div className="item item12">
                <img src={Typescript} alt="" />
                </div>
              </div> 
</div>
</section>
       
      </div>





      <section className="pt-16 lg:pt-20 bg-slate-950/10 px-1 lg:px-0">
        <div className="section-container">
          <h2 className="section-title text-center mb-12 pb-6 border-b-2 border-indigo-200" data-aos="fade-up">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
              <img src="images/IMG_E4927@1x_1.jpg" alt="" className="w-24 h-24 rounded-full object-cover ring-2 ring-stone-200 shadow-xl" data-aos="fade-up" />
              <h2 className="text-xl font-semibold text-stone-200">Jr. Full Stack Developer</h2>
              <h3 data-aos="fade-up" data-aos-delay="80" className="text-lg font-heading font-semibold text-stone-300 pb-2 border-b-2 border-indigo-200 w-full">Skills</h3>
              <p data-aos="fade-up" data-aos-delay="140" className="text-stone-400">Next.js | TypeScript | JavaScript | Redux | React | Node Js |  Express js | <br /> Mongoose |  MongoDB |  PostgreSQl | Prisma ORM | Docker | CI/CD</p>
              <div data-aos="fade-up" data-aos-delay="200" className="w-full">
                <h3 className="text-lg font-heading font-semibold text-stone-300 pb-2 border-b-2 border-indigo-200 w-full mb-4">Education</h3>
                <p className="text-stone-400">Mymensingh Engineering College, Mymensingh</p>
                <p className="text-stone-400">BSc in Computer Science and Engineering</p>
                <p className="text-stone-400">November, 2022 - current</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
              <p data-aos="fade-up" className="text-xl font-semibold text-indigo-500"></p>
              <p data-aos="fade-up" data-aos-delay="80" className="text-stone-400 leading-relaxed">Full Stack Developer with 2+ years of professional experience building scalable web applications 
                using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma ORM. Experienced in developing enterprise-grade SaaS platforms, 
                e-commerce systems, real-time applications, and content management systems. Skilled in REST API development, authentication & authorization, database 
                design, performance optimization, and modern software architecture. Passionate about building secure, maintainable, and high-performance web applications. </p>
              <h3 className="text-lg font-heading font-semibold text-stone-400 pb-2 border-b-2 border-indigo-200 w-full" data-aos="fade-up" data-aos-delay="140">Experience</h3>
              <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400"><a href="https://flexsoftr.com/our-team/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-2">FlexSoftr</a> , Dhaka — Jr. Full Stack Developer</p>
             <div className="space-y-1">
              <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Built scalable web applications using Next.js App Router, React, TypeScript, and Node.js.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Developed RESTful APIs and integrated third-party APIs.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Implemented role-based access control (RBAC) and secure authentication systems.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Optimized application performance, SEO, and database queries.</p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400">Worked within Agile development workflows using Git and GitHub. </p>
              </div>
              <p data-aos="fade-up" data-aos-delay="200" className="text-stone-400 text-sm">May 2024 - PRESENT</p>
              <div className="flex gap-4">
                <a data-aos="fade-up" data-aos-delay="80" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-indigo-500 hover:text-indigo-600 transition-colors"><FaFacebook className="h-8 w-8" /></a>
                <a data-aos="fade-up" data-aos-delay="140" href="https://github.com/AsfaqurMec" target="_blank" rel="noreferrer" className="text-indigo-500 hover:text-indigo-600 transition-colors"><FaGithub className="h-8 w-8" /></a>
                <a data-aos="fade-up" data-aos-delay="200" href="https://www.linkedin.com/in/asfaqur-rahman-hamim" target="_blank" rel="noreferrer" className="text-indigo-500 hover:text-indigo-600 transition-colors"><FaLinkedin className="h-8 w-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-1 lg:px-0">
        <div className="section-container">
          <h2 data-aos="fade-up" data-aos-duration="600" className="text-3xl sm:text-4xl font-bold text-slate-100 text-center pb-4 border-b-2 border-indigo-200 mb-12">My Skills</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="card-light flex flex-col space-y-6 py-6 px-2 lg:px-6">
                <h2 data-aos="fade-up" data-aos-duration="600" className="text-xl font-bold text-indigo-600 pb-2 border-b border-stone-200 text-center">Front End</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={html} alt="HTML" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Html</span>
                  </div>
                <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={css} alt="css" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Css</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={JavaScriptl} alt="JavaScript" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">JavaScript</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={bootstrap} alt="Bootstrap" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Bootstrap</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={react} alt="React" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">React</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={Tailwind} alt="Tailwind" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Tailwind Css</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={next} alt="Next.js" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Next.js</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={Typescript} alt="TypeScript" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">TypeScript</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={redux} alt="Redux" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Redux</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={daisy} alt="DaisyUI" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">DaisyUI</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={ant} alt="Ant Design" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Ant Design</span>
                  </div>
               
                  

              </div>

            </div>

            <div className="card-light flex flex-col space-y-6 py-6 px-2 lg:px-6">
              <h2 className="text-xl font-bold text-indigo-600 pb-2 border-b border-stone-200 text-center" data-aos="fade-up" data-aos-duration="600">Back End</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={node} alt="Node.js" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Node.js</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={express} alt="Express.js" className="h-10 w-14 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Express.js</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={fire} alt="Firebase" className="h-10 w-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Firebase</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={jwt} alt="JWT" className="h-10 w-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">JWT</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={zod} alt="Zod" className="h-10 w-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Zod</span>
                  </div>
                 </div>
            </div>

            <div className="card-light flex flex-col space-y-6 py-6 px-2 lg:px-6">
              <h2 className="text-xl font-bold text-indigo-600 pb-2 border-b border-stone-200 text-center" data-aos="fade-up" data-aos-duration="600">DataBase</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={mongodb} alt="MongoDB" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">MongoDB</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={mongoose} alt="Mongoose" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Mongoose</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={mysql} alt="MySQL" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">MySQL</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={postgre} alt="PostgreSQL" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">PostgreSQL</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={prisma} alt="Prisma" className="w-10 h-10 object-contain"/>
                    <span className="text-sm text-stone-500 font-medium mt-1">Prisma ORM</span>
                  </div>
                 </div>
            </div>

            <div className="card-light flex flex-col space-y-6 py-6 px-2 lg:px-6">
              <h2 className="text-xl font-bold text-indigo-600 pb-2 border-b border-stone-200 text-center" data-aos="fade-up" data-aos-duration="600">Tools</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={git} alt="Git" className="w-10 h-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Git</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={rest} alt="REST API" className="h-10 w-14 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Restful API</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={postman} alt="Postman" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Postman</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={cloudinary} alt="Cloudinary" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Cloudinary</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={nodemailer} alt="Nodemailer" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Nodemailer</span>
                  </div>
                 </div>
               

            </div>

            <div className="card-light flex flex-col space-y-6 py-6 px-2 lg:px-6">
              <h2 className="text-xl font-bold text-indigo-600 pb-2 border-b border-stone-200 text-center" data-aos="fade-up" data-aos-duration="600">Languages</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={c} alt="C" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">C</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={JavaScriptl} alt="JavaScript" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">JavaScript</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={java} alt="Java" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Java</span>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col items-center justify-center p-3 bg-stone-100 rounded-xl w-24 border border-stone-200 hover:border-indigo-300 transition-colors">
                    <img src={Typescript} alt="TypeScript" className="h-10 w-10 object-contain"/>
                      <span className="text-sm text-stone-500 font-medium mt-1">Typescript</span>
                  </div>
                 </div>
               

            </div>


          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-100 text-center pb-4 border-b-2 border-indigo-200">CMS</h2>
            <div className="flex justify-center mt-6" data-aos="fade-up" data-aos-duration="600">
              <div className="card-light flex flex-col items-center justify-center p-6 w-full max-w-xs">
                <img src={WordPress} alt="WordPress" className="h-14 w-auto object-contain"/>
                <span className="text-stone-500 font-medium mt-3">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 lg:py-24 px-0 lg:px-0">
        <div className="section-container">
          <h2 data-aos="fade-up" data-aos-duration="600" className="text-3xl sm:text-4xl font-bold text-slate-100 text-center pb-4 border-b-2 border-indigo-200">Projects</h2>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-center mt-4 text-stone-500">Below are the projects on <span className="text-indigo-600 font-medium">MERN Stack!</span> & <span className="text-stone-600 font-medium">WordPress</span></p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-12">
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-indigo-600"><CountUp enableScrollSpy end={15} duration={5} />+</span>
              <span className="text-sm font-medium text-stone-500">Total Projects</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-indigo-600"><CountUp enableScrollSpy end={12} duration={5} />+</span>
              <span className="text-sm font-medium text-stone-500">Full Stack</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-indigo-600"><CountUp enableScrollSpy end={7} duration={8} />+</span>
              <span className="text-sm font-medium text-stone-500">Next Js</span>
            </div>
            <div className="card-light flex flex-col justify-center items-center gap-2 p-6">
              <span className="text-3xl font-bold text-indigo-600"><CountUp enableScrollSpy end={4} duration={8} />+</span>
              <span className="text-sm font-medium text-stone-500">WordPress</span>
            </div>
          </div>

          <h2 data-aos="fade-up" data-aos-duration="600" className="text-center text-4xl font-semibold mb-5 mt-24 mb-16">M E R N STACK</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {dbProjects.filter(p => p.category !== 'WordPress').map((p, idx) => (
            <Link key={p._id || idx} to={`/projects/${p._id}`}>
              <div data-aos="fade-up" data-aos-duration="600" className="card-light overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" src={p.thumbnail} alt={p.title} />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-100">{p.title}</h3>
                    <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-500">{p.type}</span>
                  </div>
                  <p className="line-clamp-2 text-sm text-stone-500 mt-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {(p.technologies || []).slice(0, MAX_TECHNOLOGIES_TO_SHOW).map((t,i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">{t}</span>
                    ))}
                    {(p.technologies || []).length > MAX_TECHNOLOGIES_TO_SHOW ? (
                      <span className="text-xs px-2 py-0.5 rounded text-blue-700 font-medium bg-sky-800/10 ml-2">... more</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          ))} */}

{sortProjects(dbProjects.filter((p) => p.category !== "WordPress"))
  .map((p, idx) => {
    const cleanedTechs = cleanArray(p.technologies);
    return (
      <Link key={p._id || idx} to={`/projects/${p._id}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="card-light overflow-hidden group"
        >
          <div className="aspect-video overflow-hidden">
            <img
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={p.thumbnail}
              alt={p.title}
            />
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100">{p.title}</h3>
              {p.type && (
                <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-500">
                  {p.type}
                </span>
              )}
            </div>
            <p className="line-clamp-2 text-sm text-stone-500 mt-1">
              {p.description}
            </p>
            {cleanedTechs.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {cleanedTechs
                  .slice(0, MAX_TECHNOLOGIES_TO_SHOW)
                  .map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600"
                    >
                      {t}
                    </span>
                  ))}
                {cleanedTechs.length > MAX_TECHNOLOGIES_TO_SHOW ? (
                  <span className="text-xs px-2 py-0.5 rounded text-blue-700 font-medium bg-sky-800/10 ml-2">
                    ... more
                  </span>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  })}
          
         

          
          
                      <Link to={'https://schedular-asl.vercel.app/'}>
                                    <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                                      <div className="aspect-video overflow-hidden">
                                        <img className="h-48 w-full"
                                          src={asl}
                                          alt="Shoes" />
                                      </div>
                                      <div className="p-4">
                                        <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
                                          Smart Class Scheduler ASL
                                        </h3>
                                        <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Schedular</span>
                                        </div>
                                        <p className="line-clamp-2 text-sm text-stone-500 mt-1">A smart class scheduling Website using Next.js, React, MongoDB.</p>
                                        <div className="card-actions justify-start mt-3">
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Next Js</div>
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                      
                                  <Link to={'https://exponential-du.vercel.app/'}>
                                    <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                                      <div className="aspect-video overflow-hidden">
                                        <img className="h-48 w-full"
                                          src={exponential}
                                          alt="Shoes" />
                                      </div>
                                      <div className="p-4">
                                        <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
                                          Exponential DU
                                        </h3>
                                        <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Online Course</span>
                                        </div>
                                        <p className="line-clamp-2 text-sm text-stone-500 mt-1">A online course Website using Next.js, React, MongoDB.</p>
                                        <div className="card-actions justify-start mt-3">
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Next Js</div>
                                          <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                      
          
          
                       <Link to={'https://www.masuafoundation.org/'}>
                        <div className="card-light overflow-hidden group">
                          <div className="aspect-video overflow-hidden">
                            <img className="h-48 w-full"
                              src={img6}
                              alt="Shoes" />
                          </div>
                          <div className="p-4">
                            <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
                              Masua Foundation
                            </h3>
                            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Foundation</span>
                            </div>
                            <p className="line-clamp-2 text-sm text-stone-500 mt-1">A responsive Website using Next.js, React, MongoDB.</p>
                            <div className="card-actions justify-start mt-3">
                              <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                              <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Next Js</div>
                              <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
                            </div>
                          </div>
                        </div>
                      </Link>
          
          
                       <Link to={'https://electro-brown.vercel.app/'}>
          <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img5}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              Electro
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">E-Commerce</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A responsive E-commerce Website using Next.js, React, MongoDB.</p>
              <div className="card-actions justify-start mt-3">
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Next Js</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
                       <Link to={'https://hospital-mu-six.vercel.app'}>
          <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img1}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              MediPro
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Hospital</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A responsive Medical Hospital Website using Next.js, React, MongoDB.</p>
              <div className="card-actions justify-start mt-3">
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Next Js</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          
          
          
                       <Link to={'https://trendy-threads-clothing.web.app'}>
          <div className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              Bostro
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">E-Commerce</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A e-commerce clothing website for cloths. User easily wishlist, cart & purchase cloths.</p>
              <div className="card-actions justify-start mt-3">
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Stripe</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          
          
          
                       <Link to={'https://blood-donation-1ed49.web.app'}>
          <div className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img2}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              OneBlood!
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Blood Donation</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A blood donation website for searching doner and donate blood & money.</p>
              <div className="card-actions justify-start mt-3">
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Stripe</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://resturant-7f83a.web.app'}>
          <div className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img3}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              DineEase!
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Resturant</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A resturant website using MongoDB and React.
          
              </p>
              <div className="card-actions justify-start mt-3">
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Node.js</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://tourism-41ddf.web.app'}>
          
          <div className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full"
                src={img4}
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              ExploreEpic
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Travel</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A tours & travels website where user can easily find his destination.</p>
              <div className="card-actions justify-start mt-3">
              <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Node.js</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://review-book-site.netlify.app'}>
          <div className="card-light overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="h-48 w-full "
                src="https://i.ibb.co/NsWgZGz/Screenshot-2024-07-16-123448.png"
                alt="Shoes" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 flex-wrap">
              Book Vibe
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-sky-500/20 text-indigo-600">Book Review</span>
              </div>
              <p className="line-clamp-2 text-sm text-stone-500 mt-1">A book website. Here user can read books easily & save them for later.</p>
              <div className="card-actions justify-start mt-3">
              <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">React</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">Node.js</div>
                <div className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-stone-600">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
                       </div>
                        
                       <h2 className="text-center text-5xl font-semibold mb-5 mt-24">WordPress</h2>
                       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">
                        
                        {sortProjects(dbProjects.filter(p => p.category === 'WordPress')).map((p, idx) => (
            <Link key={p._id || idx} to={`/projects/${p._id}`}>
              <div data-aos="fade-up" data-aos-duration="600" className="card-light overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img className="h-48 w-full" src={p.thumbnail} alt={p.title} />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-slate-100">
                    {p.title}
                  </h2>
                  <p className="line-clamp-2 text-sm text-stone-500 mt-1">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}

                      {/* <Link to={'https://neosupremetech.com/'}>
                        <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                          <div className="aspect-video overflow-hidden">
                            <img className="h-48 w-full"
                              src={img7}
                              alt="Shoes" />
                          </div>
                          <div className="p-4">
                            <h2 className="card-title">
                              Neo Superme Tech
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link> */}
          
                      {/* <Link to={'https://platinumamenity.com/'}>
                        <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                          <div className="aspect-video overflow-hidden">
                            <img className="h-48 w-full"
                              src={img8}
                              alt="Shoes" />
                          </div>
                          <div className="p-4">
                            <h2 className="card-title">
                            Platinum Amenity
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link> */}
          
                      {/* <Link to={'https://goldenresolution.com/'}>
                        <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                          <div className="aspect-video overflow-hidden">
                            <img className="h-48 w-full"
                              src={img9}
                              alt="Shoes" />
                          </div>
                          <div className="p-4">
                            <h2 className="card-title">
                            Golden Resolution
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link> */}

                       <Link to={'https://deshiohandicraft.com/'}>
                        <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                          <div className="aspect-video overflow-hidden">
                            <img className="h-48 w-full"
                              src={img10}
                              alt="Shoes" />
                          </div>
                          <div className="p-4">
                            <h2 className="font-semibold text-slate-100">
                            Deshio HandiCraft
                            </h2>
                            <p className="line-clamp-2 text-sm text-stone-500 mt-1">A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link>

          </div>

          
          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">
            {dbProjects.filter(p => p.category === 'WordPress').map((p, idx) => (
              <Link key={p._id || idx} to={`/projects/${p._id}`}>
                        <div data-aos="fade-up" data-aos-delay="120" className="card-light overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img className="h-48 w-full" src={p.thumbnail} alt={p.title} />
                  </div>
                  <div className="p-4">
                    <h2 className="card-title">
                      {p.title}
                    </h2>
                    <p className="line-clamp-2">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}

     



        </div>
      </section>


      <section className="py-16 lg:py-14 px-5 lg:px-0">
        <div className="section-container">
          <h2 data-aos="fade-up" data-aos-duration="600" className="text-3xl sm:text-4xl font-bold text-slate-100 text-center pb-4 border-b-2 border-indigo-200">Contact Me</h2>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-center mt-4 text-stone-500">Below are the details to reach out to me!</p>

          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div data-aos="fade-up" data-aos-duration="600" className="card-light flex flex-col items-center gap-4 p-8 text-center">
              <FaRegAddressCard className="h-12 w-12 text-indigo-600" />
              <h3 className="font-semibold text-stone-500">Address</h3>
              <p className="text-stone-400">Rahamatpur, Mymensingh</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="card-light flex flex-col items-center gap-4 p-8 text-center">
              <FaPhoneAlt className="h-12 w-12 text-indigo-600" />
              <h3 className="font-semibold text-stone-500">Contact Number</h3>
              <p className="text-stone-400">01956230265</p>
              <p className="text-stone-400">01572908354</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="card-light flex flex-col items-center gap-4 p-8 text-center">
              <MdEmail className="h-12 w-12 text-indigo-600" />
              <h3 className="font-semibold text-stone-500">Email</h3>
              <p className="text-stone-400 break-all">asfaqurrahman055@gmail.com</p>
            </div>
          </div>

          <p className="text-center mt-10 text-stone-500">Have a question? <button type="button" onClick={() => { setSubmitError(""); setIsModalOpen(true);}}className="inline-block mt-2 px-5 py-2.5 bg-indigo-900 hover:bg-sky-600 text-white font-medium rounded-xl transition-colors ml-5">Contact Me</button></p>
        </div>
      </section>

      <section>

      </section>

      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-2xl rounded-2xl border border-indigo-200/20 bg-slate-900 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-indigo-200/15 px-6 py-4">
              <h4 className="text-xl font-semibold text-slate-100">Send a Message</h4>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg px-3 py-1.5 text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {submitError && (
                <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-200 text-sm px-4 py-3">
                  {submitError}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                />
                {errors.name && <p className="text-rose-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                  />
                  {errors.email && <p className="text-rose-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-stone-300 mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+8801XXXXXXXXX"
                    className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                  />
                  {errors.mobile && <p className="text-rose-400 text-sm mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Description (Minimum 50 characters)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your project, goals, and any key requirements..."
                  className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400 resize-none"
                />
                <div className="mt-1 flex justify-between text-xs">
                  <span className="text-stone-500">Be as specific as possible.</span>
                  <span className={`${formData.description.trim().length >= 50 ? "text-emerald-400" : "text-stone-500"}`}>
                    {formData.description.trim().length}/50
                  </span>
                </div>
                {errors.description && <p className="text-rose-400 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl border border-white/15 text-stone-200 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
            aria-hidden="true"
          />
          <div
            className="relative w-full max-w-md rounded-2xl border border-emerald-500/25 bg-slate-900 shadow-2xl shadow-black/50 p-8 text-center"
            role="dialog"
            aria-labelledby="success-title"
            aria-modal="true"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 text-2xl font-bold">
              ✓
            </div>
            <h3 id="success-title" className="text-xl font-semibold text-slate-100">
              Message submitted
            </h3>
            <p className="mt-3 text-stone-400 text-sm leading-relaxed">
              Thank you for reaching out. Your message was received successfully. I will get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default Home;