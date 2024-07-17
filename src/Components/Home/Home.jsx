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
const Home = () => {

    const [text] = useTypewriter({
        words: ['Asfaqur Rahman', 'A Developer'],
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
        <div>
            <section className="relative min-h-screen mb-36 lg:mb-0">
        <div className="hero py-8 absolute bg-[#1e2c12]  min-h-screen">


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
                            distance: 300,
                            duration: 0.20,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0d0d",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 130,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
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
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    
                },
                detectRetina: false,
                
            }}
        />



            <div className="hero-content w-full flex-col p-0 justify-between gap-12 lg:flex-row-reverse text-slate-200">
            <div className="bounce w-2/3 md:w-1/2 lg:w-1/3 mb-5 justify-center flex mt-28 lg:mt-0"><img src="images/IMG_E4927@1x_1.jpg" className=" rounded-full shadow-2xl shadow-lime-600 mb-5" /></div> 
              <div className="px-8 lg:px-0">
            
                <h1 className="text-6xl font-bold pb-4">I'm <br className="block md:hidden" />  <span className="name text-5xl md:text-6xl text-[#0ef] md:pl-4">{text}</span></h1>
                <h1 className="text-4xl font-bold">A <span>Front-End Web Developer</span></h1>
                <p className="py-6 text-2xl">I am a developer & coder. I do it because i like to do it. Hope you like my works.</p>
                <a href="Resume-Hamim.pdf"><button className="btn bg-sky-400 hover:bg-amber-600 text-white text-xl lg:text-2xl border-none">Download Resume</button></a>
                <div className="mt-8 flex flex-row justify-start gap-5">
<FaFacebook className="h-10 text-orange-500 w-10" />
  <FaGithub className="h-10 text-orange-500 w-10" />
<FaLinkedin className="h-10 text-orange-500 w-10" />

</div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Home;