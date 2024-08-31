/* eslint-disable react/no-unescaped-entities */
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();



const Home = () => {


const container = document.querySelector('.progress-bars'); 
const progres = document.querySelector('.progres'); 
const percentage = document.querySelector('.percentage'); 

let bol = false;
let count;

window.addEventListener("scroll", () => {
  if(scrollY > container.offsetTop - 400 && bol === false){
   for(let i=0; i<progres.length; i++){
    percentage.innerText = 0;
    count =0;

const data = parseInt(progres[i].dataset.count);

progres[i].style.transition = "width" + (data * 30) + "ms";

progres[i].style.width = data + "%";


const updateCount =()=> {
  if(count < data){
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
        console.log(engine);
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
            <section className="relative bg-[#0e1d0a]  h-[920px] md:min-h-[80vh] lg:mb-0">
        <div className="hero py-8 absolute bg-[#0e1d0a]  h-[920px] md:min-h-[80vh]">


        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 520,
            
                style : {
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



            <div className="hero-content w-full flex-col p-0 justify-between gap-12 lg:flex-row-reverse text-slate-200">
            <div className="bounce w-2/3 md:w-1/2 lg:w-1/3 mb-5 justify-center flex mt-28 lg:mt-0"><img src="images/IMG_E4927@1x_1.jpg" className=" rounded-full shadow-2xl shadow-lime-600 mb-5" /></div> 
              <div className="px-8 lg:px-0">
            
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="text-6xl font-bold pb-4">I'm <br className="block md:hidden" />  <span className="name text-[42px] md:text-6xl text-[#0ef] md:pl-4">{text}</span></h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className="text-4xl font-bold">A <span>Front-End Web Developer</span></h1>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" className="py-6 text-2xl">I am a developer & coder. I do it because i like to do it. Hope you like my works.</p>
                <a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000" href="https://drive.google.com/file/d/1h4QdtI5-gTD31bJFF8s52Y5VFkcoWjGv/view?usp=sharing"><button className="btn bg-sky-400 hover:bg-amber-600 text-white text-xl lg:text-2xl border-none">Download Resume</button></a>
                <div className="mt-8 flex flex-row justify-start gap-5">
<a data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1000" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL"><FaFacebook className="h-10 text-orange-500 w-10" /></a>
<a data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1200" href="https://github.com/dashboard"><FaGithub className="h-10 text-orange-500 w-10" /></a> 
<a data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="1400" href="https://www.linkedin.com/uas/login-submit"><FaLinkedin className="h-10 text-orange-500 w-10" /></a>

</div>
              </div>
            </div>
          </div>
        </section>
        </div>

<section>

<div className="bg-[#0e1d0a] min-h-screen mt-10 pt-28 px-10 pb-10 text-white">
            <h2 className="text-5xl mb-10 font-bold text-teal-200 pb-5 border-b-4 border-dotted text-center" data-aos="zoom-in-up" data-aos-duration="1000">About Me</h2>
<div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

            <img src="images/IMG_E4927@1x_1.jpg" className="w-[25%] rounded-full shadow-2xl object-cover " data-aos-duration="1000" data-aos="flip-left"/>
             
            <h2 className="text-2xl font-semibold">Front-end Developer</h2>
            <h3 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300"  className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 pb-2">Skills :</h3>
            <p data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="400" className="text-xl font-semibold ">React | Node Js | Express js | MongoDB | JavaScript | <br /> Css | Html
</p>
 <div data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="100" className="w-full">
<h3 className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 mb-5 pb-2">Education :</h3>
 
<p className="text-xl font-medium">Mymensingh Engineering College,Mymensingh</p>
<p className="text-xl font-medium">BSc in Computer Science and Engineering</p>
<p className="text-xl font-medium">November, 2022 - current</p>
</div>



            </div>


            <div  className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

            <p data-aos-duration="2000" data-aos-delay="200" data-aos="flip-left" className="text-3xl text-orange-600 font-semibold">Front-end Developer</p>
             
             <p data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="300" className="text-lg font-medium">I'm Asfaqur Rahman, a front-end developer
proficient in HTML, CSS, JavaScript,React,
and Tailwind CSS. With a passion for crafting
engaging digital experiences, I specialize in
translating designs into seamless, responsive
code. I'm dedicated to delivering top-notch
solutions. Collaborative by nature, I enjoy
working closely with designers and
stakeholders to bring ideas to life.</p>

<h3 className="border-b-4 border-dotted w-full text-2xl font-semibold text-orange-600 pb-2" data-aos-duration="2000" data-aos-delay="400" data-aos="flip-left">Experience :</h3>
 
<p data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="500" className="text-xl font-semibold"><a href="https://flexsoftr.com/our-team/" className="text-sky-400 hover:text-indigo-500 text-3xl font-bold underline">FlexSoftr</a> , Dhaka — React.js Developer</p>
<p data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="500" className="text-xl font-semibold">As a React.js developer, I'll build UIs, manage state,
optimize performance, integrate APIs, collaborate with
teams, and ensure code quality.</p>
<p data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-delay="500" className="text-xl font-semibold">May 2024 - PRESENT</p>

<div className="flex flex-row justify-start gap-5">
<a data-aos="zoom-in-right" data-aos-duration="600" data-aos-delay="1000" href="https://www.facebook.com/asfaqur.rahman.735?mibextid=ZbWKwL"><FaFacebook className="h-10 text-orange-500 w-10" /></a>
<a data-aos="zoom-in-up" data-aos-duration="700" data-aos-delay="1200" href="https://github.com/dashboard"><FaGithub className="h-10 text-orange-500 w-10" /></a> 
<a data-aos="zoom-in-left" data-aos-duration="800" data-aos-delay="1400" href="https://www.linkedin.com/uas/login-submit"><FaLinkedin className="h-10 text-orange-500 w-10" /></a>

</div>


            </div>

            </div>

        </div>

</section>

<section>
<div className="bg-[#0e1d0a] h-auto lg:h-screen pt-28 px-10 pb-10">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-5xl font-bold text-teal-200 pb-5 border-b-4 border-dotted text-center">My Skills</h2>

            <div className=" mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 lg:gap-10">

<div className="flex flex-col space-y-10">
    <h2 data-aos="zoom-in-right" data-aos-duration="1000" className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8">Front End</h2>




{/* <ul className="progress-bars">

<h3>hhh</h3>
<li>
<div className="bar">
<div className="progres" data-count="72"></div>

</div>
<span className="percentage">72%</span>
</li>
</ul> */}





<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
  <div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">HTML</h3>
  <h3 className="text-white font-semibold">95%</h3>
  </div>
    
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="95" max="100">HTML</progress>
</div>

<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
<div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">CSS</h3>
  <h3 className="text-white font-semibold">90%</h3>
  </div>
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="90" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
<div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">JAVASCRIPT</h3>
  <h3 className="text-white font-semibold">75%</h3>
  </div>
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
<div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">REACT</h3>
  <h3 className="text-white font-semibold">85%</h3>
  </div>
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="85" max="100">HTML</progress>
</div>
    </div>

<div className="flex flex-col space-y-10">
<h2 className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">Back End</h2>

<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
<div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">NODE JS</h3>
  <h3 className="text-white font-semibold">75%</h3>
  </div>
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
<div className="flex flex-row justify-between">
  <h3 className="text-white font-semibold">EXPRESS JS</h3>
  <h3 className="text-white font-semibold">85%</h3>
  </div>
<progress className="progress progress-accent rounded-none w-full md:w-full bg-orange-700" value="85" max="100">HTML</progress>
</div>


</div>

<div className="flex flex-col space-y-5" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
<h2 className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8">Database</h2>

<div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
<div className="flex flex-row justify-between mt-5">
  <h3 className="text-white font-semibold">MONGODB</h3>
  <h3 className="text-white font-semibold">70%</h3>
  </div>
<progress className="progress progress-accent w-full md:w-full h-2 rounded-none bg-orange-700" value="70" max="100">HTML</progress>
</div>

</div>


            </div>
        </div>
</section>


<section>
<div className="bg-[#0e1d0a] min-h-screen pt-28 px-10 pb-10 text-white w-full">
             <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-center text-5xl font-semibold">Projects</h2>
             <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100" className="text-center mt-7 font-semibold text-lg">Below are the projects on <span className="text-orange-700 text-2xl ml-2"> M E R N Stack!</span></p>

             <div className="flex flex-wrap gap-16 md:gap-10 justify-evenly mt-20 mx-auto w-full">


             <Link to={'https://hospital-mu-six.vercel.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
    MediPro
      <div className="badge badge-info">Hospital</div>
      
    </h2>
    <p>A responsive Medical Hospital Website using Next.js, React, MongoDB.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">Next Js</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

             <Link to={'https://trendy-threads-clothing.web.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
      Bostro
      <div className="badge badge-info">E-Commerce</div>
      
    </h2>
    <p>A e-commerce clothing website for cloths. User easily wishlist, cart & purchase cloths.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">Stripe</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>



<Link to={'https://blood-donation-1ed49.web.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48"
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
      OneBlood!
      <div className="badge badge-secondary">Blood Donation</div>
      
    </h2>
    <p>A blood donation website for searching doner and donate blood & money.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-orange-800 pb-[2px]  badge-outline">React</div>
      <div className="badge bg-orange-800 pb-[2px]  badge-outline">Stripe</div>
      <div className="badge bg-orange-800 pb-[2px]  badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://resturant-7f83a.web.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="700" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48"
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
    DineEase!
      <div className="badge badge-primary">Resturant</div>
    </h2>
    <p>A resturant website using MongoDB and React.

    </p>
    <div className="card-actions justify-end">
      <div className="badge bg-fuchsia-800 pb-[2px] badge-outline">React</div>
      <div className="badge bg-fuchsia-800 pb-[2px] badge-outline">Node.js</div>
      <div className="badge bg-fuchsia-800 pb-[2px] badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://tourism-41ddf.web.app'}>

<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="000" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
      src={img4}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
    ExploreEpic
      <div className="badge badge-accent">Travel</div>
    </h2>
    <p>A tours & travels website where user can easily find his destination.</p>
    <div className="card-actions justify-end">
    <div className="badge   bg-sky-700 pb-[2px] badge-outline">React</div>
      <div className="badge bg-sky-700 pb-[2px] badge-outline">Node.js</div>
      <div className="badge bg-sky-700 pb-[2px] badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://review-book-site.netlify.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" className="card  w-[340px] md:w-96 shadow-2xl shadow-emerald-800 rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 "
      src="https://i.ibb.co/NsWgZGz/Screenshot-2024-07-16-123448.png"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
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
        </div>
</section>


<section>
<div  className="bg-[#0e1d0a] h-auto lg:h-screen pt-28 px-10 pb-10 text-white">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="000" className="text-center text-5xl font-semibold">Contact Me</h2>
            <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" className="text-center mt-7 font-semibold text-lg">Below are the details to reach out to me!</p>

            <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center">

        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="flex flex-col items-center gap-5 border rounded-md p-10">
        <FaRegAddressCard className="h-14 w-14 text-orange-600" />
        <h3 className="text-center">Address</h3>
            <p className="text-center mt-5">Rahamatpur, Mymensingh</p>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col items-center gap-5 border rounded-md p-10">
        <FaPhoneAlt className="h-14 w-14 text-orange-600" />
        <h3 className="text-center">Contact Number</h3>
            <p className="text-center mt-5">01956230265</p>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" className="flex flex-col items-center gap-5 border rounded-md p-10">
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