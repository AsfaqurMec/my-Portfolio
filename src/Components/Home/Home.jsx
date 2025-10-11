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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CountUp from 'react-countup';
// ..
AOS.init();

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


const Home = () => { 

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
    loop: Infinity
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



  return (
    <>
      <div>
        <section className="relative bg-[#081506]  h-[1300px] md:min-h-[90vh] lg:h-[130vh] lg:mb-0">
          <div className="hero pt-8 pb-5 absolute bg-[#081506]  h-[1300px] md:min-h-[90vh] lg:h-[130vh]">


            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{

                fpsLimit: 520,

                style: {
                  position: 'absolute'
                },

                interactivity: {

                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },

                  modes: {
                    push: {
                      quantity: 1,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.50,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#0d0d",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: .8,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 1000,
                    },
                    value: 150,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: .5, max: 5 },
                  },

                },
                detectRetina: false,

              }}
            />


            <div>
              <div className="hero-content w-full flex-col p-0 justify-between gap-12 lg:flex-row-reverse text-slate-200">
                <div className="bounce w-2/3 md:w-1/2 lg:w-1/3 mb-5 justify-center flex mt-28 lg:mt-0"><img src="images/IMG_E4927@1x_1.jpg" className=" rounded-full shadow-xl shadow-lime-800 mb-5" /></div>
                <div className="px-8 lg:px-0">

                  <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="text-6xl font-mono font-bold pb-4">I'm <br className="block md:hidden" />  <span className="name text-[42px] md:text-6xl text-[#22f0ff] md:pl-4">{text}</span></h1>
                  <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="text-3xl md:text-4xl font-bold font-mono">A <span>Jr. Full Stack Developer</span></h1>
                  <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800" className="py-6 text-2xl">I am a developer & coder. I do it because i like to do it. Hope you like my works.</p>
                  <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000" href="https://docs.google.com/document/d/19gulR31q5tCQXaeCgdP0hzeqGq398_N773mQnJ37rME/edit?usp=sharing"><button className="btn bg-sky-400 hover:bg-amber-600 text-white text-xl lg:text-2xl border-none shadow-lg shadow-[#adadada0]">Download Resume</button></a>
                  <div className="mt-8 flex flex-row justify-start gap-5">
                    <a data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="1000" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL"><FaFacebook className="h-10 text-orange-500 w-10" /></a>
                    <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1200" href="https://github.com/dashboard"><FaGithub className="h-10 text-orange-500 w-10" /></a>
                    <a data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="1400" href="https://www.linkedin.com/in/asfaqur-rahman-hamim"><FaLinkedin className="h-10 text-orange-500 w-10" /></a>

                  </div>
                </div>
              </div>


              <div className="wrapper ">
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
          </div>
        </section>
      </div>







      <section>

        <div className="bg-[#081506] min-h-screen mt-0 pt-28 px-10 pb-10 text-white">
          <h2 className="text-5xl mb-10 font-bold text-teal-200 pb-5 border-b-4 border-dotted text-center" data-aos="zoom-in-up" data-aos-duration="1000">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

              <img src="images/IMG_E4927@1x_1.jpg" className="w-[25%] rounded-full shadow-2xl object-cover " data-aos-duration="1000" data-aos="flip-left" />

              <h2 className="text-2xl font-semibold">Jr. Full Stack Developer</h2>
              <h3 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 pb-2">Skills :</h3>
              <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="400" className="text-xl font-semibold ">Next.js | TypeScript | Redux | React | Node Js | <br /> Express js | Mongoose |  MongoDB |  JavaScript | BootStrap | Css | Html
              </p>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" className="w-full">
                <h3 className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 mb-5 pb-2">Education :</h3>

                <p className="text-xl font-medium">Mymensingh Engineering College,Mymensingh</p>
                <p className="text-xl font-medium">BSc in Computer Science and Engineering</p>
                <p className="text-xl font-medium">November, 2022 - current</p>
              </div>



            </div>


            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

              <p data-aos-duration="2000" data-aos-delay="200" data-aos="flip-left" className="text-3xl text-orange-600 font-semibold">Jr. Full Stack Developer</p>

              <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="text-lg font-medium">I'm Asfaqur Rahman, a Jr. Full Stack developer
                proficient in HTML, CSS, JavaScript, React, Node.js, Next.js, Express.js, MongoDB, Mongoose, TypeScript, Redux
                and Tailwind CSS. With a passion for crafting
                engaging digital experiences, I specialize in
                translating designs into seamless, responsive
                code. I'm dedicated to delivering top-notch
                solutions. Collaborative by nature, I enjoy
                working closely with designers and
                stakeholders to bring ideas to life.</p>

              <h3 className="border-b-4 border-dotted w-full text-2xl font-semibold text-orange-600 pb-2" data-aos-duration="2000" data-aos-delay="400" data-aos="flip-left">Experience :</h3>

              <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold"><a href="https://flexsoftr.com/our-team/" className="text-sky-400 hover:text-indigo-500 text-3xl font-bold underline">FlexSoftr</a> , Dhaka — MERN Stack Developer</p>
              <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold">As a MERN Stack developer, I'll build UIs, manage state,
                optimize performance, integrate APIs, collaborate with
                teams, and ensure code quality.</p>
              <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className="text-xl font-semibold">May 2024 - PRESENT</p>

              <div className="flex flex-row justify-start gap-5">
                <a data-aos="zoom-in-right" data-aos-duration="600" data-aos-delay="1000" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL"><FaFacebook className="h-10 text-orange-500 w-10" /></a>
                <a data-aos="zoom-in-up" data-aos-duration="700" data-aos-delay="1200" href="https://github.com/dashboard"><FaGithub className="h-10 text-orange-500 w-10" /></a>
                <a data-aos="zoom-in-left" data-aos-duration="800" data-aos-delay="1400" href="https://www.linkedin.com/in/asfaqur-rahman-hamim"><FaLinkedin className="h-10 text-orange-500 w-10" /></a>

              </div>


            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#081506]">
        <div className="bg-[#081506]  pt-28 px-10 pb-10">
          <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-5xl font-bold text-teal-200 pb-5 border-b-4 border-dotted text-center">My Skills</h2>

          <div className=" mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 lg:gap-10">

            <div className="flex flex-col space-y-8 bg-[#06230e9a] glass rounded-md px-4 py-5 hover:scale-110">
              
                <h2 data-aos="zoom-in-right" data-aos-duration="1000" className="text-3xl text-center font-bold text-orange-500 pb-2 border-b-4 mb-3">Front End</h2>
                <div className="flex flex-wrap px-5 md:px-1 gap-10">
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={html} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Html</h1>
                  </div>
                
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={css} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Css</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={JavaScriptl} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">JavaScript</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={bootstrap} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Bootstrap</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={react} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">React</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center gap-2 justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black pt-2">
                    <img src={Tailwind} alt="html" className="h-14 w-14"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Tailwind Css</h1>
                  </div>

                   <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                    <img src={next} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Next.js</h1>
                  </div>
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center gap-2 justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                    <img src={Typescript} alt="html" className="h-14 w-14"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">TypeScript</h1>
                  </div>
                   <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                    <img src={redux} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Redux</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                    <img src={daisy} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">DaisyUI</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-28 pt-2">
                    <img src={ant} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Ant Design</h1>
                  </div>
               
                  

              </div>

            </div>

            <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
              <h2 className="text-3xl text-center font-bold text-orange-500 pb-2 border-b-4 mb-3" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">Back End</h2>
                <div className="flex flex-wrap gap-10 px-5">
                  
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={node} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Node.js</h1>
                  </div>

                                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={express} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Express.js</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={fire} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Firebase</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={jwt} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">JWT</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={zod} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Zod</h1>
                  </div>

                 </div>
               

            </div>

            <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
              <h2 className="text-3xl text-center font-bold text-orange-500 pb-2 border-b-4 mb-3" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">DataBase</h2>
                <div className="flex flex-wrap gap-8 px-5">
                  
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={mongodb} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">MongoDB</h1>
                  </div>

                                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={mongoose} alt="html" className="h-16 w-[100px]"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Mongoose</h1>
                  </div>

                   <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-[110px]">
                    <img src={mysql} alt="html" className="h-16 w-[100px]"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">MySQL</h1>
                  </div>
                   <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-[110px]">
                    <img src={postgre} alt="html" className="h-16 w-[100px]"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">PostgreSQL</h1>
                  </div>
                   <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-[110px]">
                    <img src={prisma} alt="html" className="h-16 w-[100px]"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Prisma ORM</h1>
                  </div>

                 </div>
              

            </div>

               <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
              <h2 className="text-3xl font-bold text-orange-500 pb-2 border-b-4 mb-3 text-center" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">Tools</h2>
                <div className="flex flex-wrap gap-10 px-5">
                  
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={git} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Git</h1>
                  </div>

                                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={rest} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Restful API</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={postman} alt="html" className="h-16 w-24"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Postman</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={cloudinary} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Cloudinary</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={nodemailer} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Nodemailer</h1>
                  </div>

                 </div>
               

            </div>

               <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
              <h2 className="text-3xl font-bold text-orange-500 pb-2 border-b-4 mb-3 text-center" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">Languages</h2>
                <div className="flex flex-wrap gap-10 px-5">
                  
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                    <img src={c} alt="html" className="h-16 w-16"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">C</h1>
                  </div>

                                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={JavaScriptl} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">JavaScript</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={java} alt="html" className="h-16 w-24"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Java</h1>
                  </div>

                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={Typescript} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">Typescript</h1>
                  </div>

                  

                 </div>
               

            </div>


          </div>

        
        </div>

     <div>
<h1 className="text-center text-6xl font-semibold text-white mt-10 border-b-4 border-dotted pb-5 mx-10">CMS</h1>

 <div className="flex flex-col gap-2 w-[250px] md:w-[450px] mx-10 mt-5 " data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
{/* <h1 className="text-xl text-white font-semibold">WordPress</h1> */}
<div className="flex flex-col space-y-8 bg-[#06230e9a] glass rounded-md px-4 py-5 hover:scale-110">
 <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                    <img src={WordPress} alt="html" className="h-16 w-28"/>
                      <h1  className="text-lg text-[#ffffff98] font-semibold">WordPress</h1>
                  </div>
</div>
                
              </div> 

     </div>



      </section>


      <section>
        <div className="bg-[#081506] min-h-screen pt-28 px-5 md:px-10 pb-10 text-white w-full">
          <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-center text-5xl font-semibold">Projects</h2>
          <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" className="text-center mt-7 font-semibold text-lg">Below are the projects on <span className="text-orange-700 text-2xl ml-2"> M E R N Stack!</span> & <span className="text-blue-700 text-2xl ml-2"> W o r d P r e s s</span></p>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full md:w-[80%] mx-auto my-20">

            <div className="flex flex-col justify-center items-center gap-3 w-full shadow-lg rounded-badge shadow-emerald-800 border-[1px] border-[#2c421869]  pb-2 pt-1">
              <h1 className="text-5xl text-emerald-600"><CountUp className="text-orange-500 font-medium" enableScrollSpy={true} end={12} duration={5} />+</h1>
              <h1 className="text-xl">Total Projects</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 w-full shadow-lg rounded-badge shadow-emerald-800 border-[1px] border-[#2c421869]  pb-2 pt-1">
              <h1 className="text-5xl text-emerald-600"><CountUp className="text-orange-500 font-medium" enableScrollSpy={true} end={10} duration={5} />+</h1>
              <h1 className="text-xl">Full Stack</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 w-full shadow-lg rounded-badge shadow-emerald-800 border-[1px] border-[#2c421869]  pb-2 pt-1">
              <h1 className="text-5xl text-emerald-600"><CountUp className="text-orange-500 font-medium" enableScrollSpy={true} end={5} duration={8} />+</h1>
              <h1 className="text-xl fon">Next Js</h1>
            </div>
             
            <div className="flex flex-col justify-center items-center gap-3 w-full shadow-lg rounded-badge shadow-emerald-800 border-[1px] border-[#2c421869]  pb-2 pt-1">
              <h1 className="text-5xl text-emerald-600"><CountUp className="text-orange-500 font-medium" enableScrollSpy={true} end={2} duration={8} />+</h1>
              <h1 className="text-xl fon">WordPress</h1>
            </div>

          </div>

          <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-center text-3xl font-semibold mt-40 mb-10">M E R N STACK!!!</h2>

          <div className="flex flex-wrap gap-16 md:gap-10 justify-evenly mt-20 mx-auto w-full">
          {dbProjects.filter(p => p.category !== 'WordPress').map((p, idx) => (
            <Link key={p._id || idx} to={`/projects/${p._id}`}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" className="card glass  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full" src={p.thumbnail} alt={p.title} />
                </figure>
                <div className="card-body bg-[#00000020] rounded-b-lg">
                  <h2 className="card-title">
                    {p.title}
                    <div className="badge badge-error text-white shadow-sm shadow-[#000000] pb-1">{p.category || 'Project'}</div>
                  </h2>
                  <p className="line-clamp-2">{p.description}</p>
                  <div className="card-actions justify-end">
                    {(p.technologies || []).slice(0,4).map((t,i) => (
                      <div key={i} className="badge bg-red-600 pb-[2px]  badge-outline shadow-sm shadow-[#000000]">{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          <Link to={'https://launchmybiz.net/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" className="card glass  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={launch}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body bg-[#00000020] rounded-b-lg">
                            <h2 className="card-title">
                              Launch
                              <div className="badge badge-error text-white shadow-sm shadow-[#000000] pb-1">Business Formation</div>
          
                            </h2>
                            <p>LaunchMyBiz: Complete Business Formation Platform.</p>
                            <div className="card-actions justify-end">
                              <div className="badge bg-red-600 pb-[2px]  badge-outline shadow-sm shadow-[#000000]">React</div>
                              <div className="badge bg-red-600 pb-[2px]  badge-outline shadow-sm shadow-[#000000]">Node Js</div>
                              <div className="badge bg-red-600 pb-[2px]  badge-outline shadow-sm shadow-[#000000]">TypeScript</div>
                              <div className="badge bg-red-600 pb-[2px]  badge-outline shadow-sm shadow-[#000000]">MongoDB</div>
                            </div>
                          </div>
                        </div>
                      </Link>

           <Link to={'https://as-global.vercel.app/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={as}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body bg-[#00000020] rounded-b-lg">
                            <h2 className="card-title">
                              AS Global Styles
                              <div className="badge badge-warning shadow-sm shadow-[#ffffff]">Garment</div>
          
                            </h2>
                            <p>A garment Website using Next.js, React, MongoDB.</p>
                            <div className="card-actions justify-end">
                              <div className="badge bg-amber-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">React</div>
                              <div className="badge bg-amber-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">Next Js</div>
                              <div className="badge bg-amber-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">MongoDB</div>
                            </div>
                          </div>
                        </div>
                      </Link>
          
                      <Link to={'https://schedular-asl.vercel.app/'}>
                                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                                      <figure>
                                        <img className="h-48 w-full"
                                          src={asl}
                                          alt="Shoes" />
                                      </figure>
                                      <div className="card-body bg-[#00000020] rounded-b-lg">
                                        <h2 className="card-title">
                                          Smart Class Scheduler ASL
                                          <div className="badge badge-info shadow-sm shadow-[#ffffff]">Schedular</div>
                      
                                        </h2>
                                        <p>A smart class scheduling Website using Next.js, React, MongoDB.</p>
                                        <div className="card-actions justify-end">
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">React</div>
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">Next Js</div>
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">MongoDB</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                      
                                  <Link to={'https://exponential-du.vercel.app/'}>
                                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                                      <figure>
                                        <img className="h-48 w-full"
                                          src={exponential}
                                          alt="Shoes" />
                                      </figure>
                                      <div className="card-body bg-[#00000020] rounded-b-lg">
                                        <h2 className="card-title">
                                          Exponential DU
                                          <div className="badge badge-info shadow-sm shadow-[#ffffff]">Online Course</div>
                      
                                        </h2>
                                        <p>A online course Website using Next.js, React, MongoDB.</p>
                                        <div className="card-actions justify-end">
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">React</div>
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">Next Js</div>
                                          <div className="badge bg-sky-600 pb-[2px]  badge-outline shadow-sm shadow-[#ffffff]">MongoDB</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                      
          
          
                       <Link to={'https://www.masuafoundation.org/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={img6}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body bg-[#00000020] rounded-b-lg">
                            <h2 className="card-title">
                              Masua Foundation
                              <div className="badge badge-info shadow-sm shadow-[#ffffff]">Foundation</div>
          
                            </h2>
                            <p>A responsive Website using Next.js, React, MongoDB.</p>
                            <div className="card-actions justify-end">
                              <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">React</div>
                              <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">Next Js</div>
                              <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">MongoDB</div>
                            </div>
                          </div>
                        </div>
                      </Link>
          
          
                       <Link to={'https://electro-brown.vercel.app/'}>
          <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img5}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
              Electro
              <div className="badge badge-info shadow-sm shadow-[#ffffff]">E-Commerce</div>
                
              </h2>
              <p>A responsive E-commerce Website using Next.js, React, MongoDB.</p>
              <div className="card-actions justify-end">
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">React</div>
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">Next Js</div>
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
                       <Link to={'https://hospital-mu-six.vercel.app'}>
          <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img1}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
              MediPro
                <div className="badge badge-success text-white shadow-sm shadow-[#ffffff]">Hospital</div>
                
              </h2>
              <p>A responsive Medical Hospital Website using Next.js, React, MongoDB.</p>
              <div className="card-actions justify-end">
                <div className="badge bg-green-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">React</div>
                <div className="badge bg-green-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">Next Js</div>
                <div className="badge bg-green-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          
          
          
                       <Link to={'https://trendy-threads-clothing.web.app'}>
          <div className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
                Bostro
                <div className="badge badge-info shadow-sm shadow-[#ffffff]">E-Commerce</div>
                
              </h2>
              <p>A e-commerce clothing website for cloths. User easily wishlist, cart & purchase cloths.</p>
              <div className="card-actions justify-end">
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">React</div>
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">Stripe</div>
                <div className="badge bg-sky-600 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          
          
          
                       <Link to={'https://blood-donation-1ed49.web.app'}>
          <div className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img2}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
                OneBlood!
                <div className="badge badge-secondary shadow-sm shadow-[#ffffff]">Blood Donation</div>
                
              </h2>
              <p>A blood donation website for searching doner and donate blood & money.</p>
              <div className="card-actions justify-end">
                <div className="badge bg-orange-800 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">React</div>
                <div className="badge bg-orange-800 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">Stripe</div>
                <div className="badge bg-orange-800 pb-[2px] shadow-sm shadow-[#ffffff] badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://resturant-7f83a.web.app'}>
          <div className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img3}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
              DineEase!
                <div className="badge badge-primary shadow-sm shadow-[#ffffff]">Resturant</div>
              </h2>
              <p>A resturant website using MongoDB and React.
          
              </p>
              <div className="card-actions justify-end">
                <div className="badge bg-fuchsia-800 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">React</div>
                <div className="badge bg-fuchsia-800 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">Node.js</div>
                <div className="badge bg-fuchsia-800 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://tourism-41ddf.web.app'}>
          
          <div className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full"
                src={img4}
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
              ExploreEpic
                <div className="badge badge-accent shadow-sm shadow-[#ffffff]">Travel</div>
              </h2>
              <p>A tours & travels website where user can easily find his destination.</p>
              <div className="card-actions justify-end">
              <div className="badge   bg-sky-700 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">React</div>
                <div className="badge bg-sky-700 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">Node.js</div>
                <div className="badge bg-sky-700 pb-[2px] badge-outline shadow-sm shadow-[#ffffff]">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
          <Link to={'https://review-book-site.netlify.app'}>
          <div className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
            <figure>
              <img className="h-48 w-full "
                src="https://i.ibb.co/NsWgZGz/Screenshot-2024-07-16-123448.png"
                alt="Shoes" />
            </figure>
            <div className="card-body bg-[#00000020] rounded-b-lg">
              <h2 className="card-title">
              Book Vibe
                <div className="badge badge-info">Book Review</div>
              </h2>
              <p>A book website. Here user can read books easily & save them for later.</p>
              <div className="card-actions justify-end">
              <div className="badge   bg-lime-700 pb-[2px] badge-outline">React</div>
                <div className="badge bg-lime-700 pb-[2px] badge-outline">Node.js</div>
                <div className="badge bg-lime-700 pb-[2px] badge-outline">MongoDB</div>
              </div>
            </div>
          </div>
          </Link>
          
                       </div>
                        
                       <h2 className="text-center text-5xl font-semibold mb-5 mt-24">WordPress</h2>
                       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">
          
                      <Link to={'https://neosupremetech.com/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={img7}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body bg-[#00000020] rounded-b-lg">
                            <h2 className="card-title">
                              Neo Superme Tech
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link>
          
                      <Link to={'https://platinumamenity.com/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={img8}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body  rounded-b-lg">
                            <h2 className="card-title">
                            Platinum Amenity
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link>
          
                      <Link to={'https://goldenresolution.com/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={img9}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body  rounded-b-lg">
                            <h2 className="card-title">
                            Golden Resolution
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link>

                       <Link to={'https://deshiohandicraft.com/'}>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                          <figure>
                            <img className="h-48 w-full"
                              src={img10}
                              alt="Shoes" />
                          </figure>
                          <div className="card-body  rounded-b-lg">
                            <h2 className="card-title">
                            Deshio HandiCraft
                            </h2>
                            <p>A responsive Website using WordPress.</p>
                            
                          </div>
                        </div>
                      </Link>

          </div>

          {/* Dynamic WordPress projects */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">
            {dbProjects.filter(p => p.category === 'WordPress').map((p, idx) => (
              <Link key={p._id || idx} to={`/projects/${p._id}`}>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                  <figure>
                    <img className="h-48 w-full" src={p.thumbnail} alt={p.title} />
                  </figure>
                  <div className="card-body  rounded-b-lg">
                    <h2 className="card-title">
                      {p.title}
                    </h2>
                    <p className="line-clamp-2">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

     



        </div>
      </section>


      <section>
        <div className="bg-[#081506] h-auto lg:h-screen pt-28 px-10 pb-10 text-white">
          <h2 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="000" className="text-center text-5xl font-semibold">Contact Me</h2>
          <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" className="text-center mt-7 font-semibold text-lg">Below are the details to reach out to me!</p>

          <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center">

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="flex flex-col items-center gap-5 border border-black rounded-md p-10 shadow-lg shadow-[#2f5b32]">
              <FaRegAddressCard className="h-14 w-14 text-orange-600" />
              <h3 className="text-center">Address</h3>
              <p className="text-center mt-5">Rahamatpur, Mymensingh</p>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col items-center gap-5 border border-black rounded-md p-10 shadow-lg shadow-[#2f5b32]">
              <FaPhoneAlt className="h-14 w-14 text-orange-600" />
              <h3 className="text-center">Contact Number</h3>
              <p className="text-center mt-5">01956230265</p>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" className="flex flex-col items-center gap-5 border border-black rounded-md p-10 shadow-lg shadow-[#2f5b32]">
              <MdEmail className="h-14 w-14 text-orange-600" />
              <h3 className="text-center">Email</h3>
              <p className="text-center mt-5">asfaqurrahman055@gmail.com</p>
            </div>



          </div>

          <h2 className="text-center mt-10  text-xl">Have a question ? <button className="btn bg-amber-700 border-none hover:bg-yellow-600 text-white text-xl">Click here</button></h2>
        </div>
      </section>

      <section>

      </section>

    </>
  );
};

export default Home;