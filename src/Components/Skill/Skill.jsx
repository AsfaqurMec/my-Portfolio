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

const Skill = () => {
    return (
        <>
       <section className="bg-[#081506] pb-10">
              <div className="bg-[#081506]  pt-28 px-10 pb-10">
                <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="text-5xl font-bold text-teal-200 pb-5 border-b-4 border-dotted text-center">My Skills</h2>
      
                <div className=" mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 lg:gap-10">
      
                  <div className="flex flex-col space-y-8 bg-[#06230e9a] glass rounded-md px-4 py-5 hover:scale-110">
                    
                      <h2 data-aos="zoom-in-right" data-aos-duration="1000" className="text-2xl font-bold text-orange-500 pb-2 border-b-4 mb-3">Front End</h2>
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
      
                        <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center gap-2 justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                          <img src={Typescript} alt="html" className="h-14 w-14"/>
                            <h1  className="text-lg text-[#ffffff98] font-semibold">TypeScript</h1>
                        </div>
                         <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24 pt-2">
                          <img src={redux} alt="html" className="h-16 w-16"/>
                            <h1  className="text-lg text-[#ffffff98] font-semibold">Redux</h1>
                        </div>
                      {/* <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">CSS</h1>
                      <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">JAVASCRIPT</h1>
                      <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">REACT</h1>
                      <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">Next.js</h1>
                      <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">TypeScript</h1>
                      <h1 data-aos="zoom-in-right" data-aos-duration="1000" className="text-xl text-white font-semibold">Redux</h1> */}
                    </div>
      {/* 
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">HTML</h3>
                        <h3 className="text-white font-semibold">95%</h3>
                      </div>
      
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="95" max="100">HTML</progress>
                    </div>
      
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">CSS</h3>
                        <h3 className="text-white font-semibold">90%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="90" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">JAVASCRIPT</h3>
                        <h3 className="text-white font-semibold">75%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">REACT</h3>
                        <h3 className="text-white font-semibold">85%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="85" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">Next,js</h3>
                        <h3 className="text-white font-semibold">70%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">TypeScript</h3>
                        <h3 className="text-white font-semibold">70%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">Redux</h3>
                        <h3 className="text-white font-semibold">60%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="60" max="100">HTML</progress>
                    </div> */}
                  </div>
      
                  <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
                    <h2 className="text-2xl font-bold text-orange-500 pb-2 border-b-4 mb-3" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">Back End</h2>
                      <div className="flex flex-wrap gap-10 px-5">
                        
                        <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black w-24">
                          <img src={node} alt="html" className="h-16 w-16"/>
                            <h1  className="text-lg text-[#ffffff98] font-semibold">Node.js</h1>
                        </div>
      
                                          <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col items-center justify-center p-1 bg-[#0723064e] rounded-md shadow-md shadow-black">
                          <img src={express} alt="html" className="h-16 w-28"/>
                            <h1  className="text-lg text-[#ffffff98] font-semibold">Express.js</h1>
                        </div>
      
                       </div>
                     {/* <h1 className="text-xl text-white font-semibold">NODE JS</h1>
                      <h1 className="text-xl text-white font-semibold">EXPRESS JS</h1> */}
                    {/* <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">NODE JS</h3>
                        <h3 className="text-white font-semibold">75%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="75" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-white font-semibold">EXPRESS JS</h3>
                        <h3 className="text-white font-semibold">85%</h3>
                      </div>
                      <progress className="progress progress-accent rounded-md w-full md:w-full bg-orange-700" value="85" max="100">HTML</progress>
                    </div> */}
      
      
                  </div>
      
                  <div className="flex flex-col space-y-10 bg-[#0a2d149a] glass rounded-md px-4 py-5 hover:scale-110">
                    <h2 className="text-2xl font-bold text-orange-500 pb-2 border-b-4 mb-3" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">DataBase</h2>
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
                          <img src={mongoose} alt="html" className="h-16 w-[100px]"/>
                            <h1  className="text-lg text-[#ffffff98] font-semibold">PostgreSQL</h1>
                        </div>
      
                       </div>
                    {/* <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
                      <div className="flex flex-row justify-between mt-5">
                        <h3 className="text-white font-semibold">MONGODB</h3>
                        <h3 className="text-white font-semibold">70%</h3>
                      </div>
                      <progress className="progress progress-accent w-full md:w-full h-2 rounded-md bg-orange-700" value="70" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
                      <div className="flex flex-row justify-between mt-5">
                        <h3 className="text-white font-semibold">MySQL</h3>
                        <h3 className="text-white font-semibold">60%</h3>
                      </div>
                      <progress className="progress progress-accent w-full md:w-full h-2 rounded-md bg-orange-700" value="60" max="100">HTML</progress>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
                      <div className="flex flex-row justify-between mt-5">
                        <h3 className="text-white font-semibold">PostgreSQL</h3>
                        <h3 className="text-white font-semibold">60%</h3>
                      </div>
                      <progress className="progress progress-accent w-full md:w-full h-2 rounded-md bg-orange-700" value="60" max="100">HTML</progress>
                    </div> */}
      
                  </div>
      
      
                </div>
              </div>
      
           <div>
      <h1 className="text-center text-6xl font-semibold text-white mt-10 border-b-4 border-dotted pb-5 mx-10">CMS</h1>
      
       <div className="flex flex-col gap-2 w-[250px] md:w-[450px] mx-10 mt-5 " data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
      {/* <h1 className="text-xl text-white font-semibold">WordPress</h1> */}
      <div className="flex flex-col space-y-8 bg-[#06230e9a] glass rounded-md px-4 py-5 hover:scale-110">
        <h1 className="text-xl text-white font-semibold">WordPress</h1>
      </div>
                      {/* <div className="flex flex-row justify-between mt-5">
                        <h3 className="text-white font-semibold">WordPress</h3>
                        <h3 className="text-white font-semibold">85%</h3>
                      </div>
                      <progress className="progress progress-success w-full md:w-full h-2 rounded-md bg-sky-700" value="85" max="100">HTML</progress> */}
                    </div> 
      
           </div>
      
      
      
            </section>
        {/* <div className="bg-[#1e2c12] h-auto pt-28 px-10 pb-3">
            <h2 className="text-3xl font-bold text-teal-200 pb-5 border-b-4 border-dotted">My Skills</h2>

            <div className=" mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="flex flex-col space-y-5">
    <h2 className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8">Front End</h2>
<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">HTML</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="95" max="100">HTML</progress>
</div>

<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">CSS</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="90" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">JAVASCRIPT</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="75" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">REACT</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="85" max="100">HTML</progress>
</div>
    </div>

<div className="flex flex-col space-y-5">
<h2 className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8">Back End</h2>

<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">NODE JS</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="75" max="100">HTML</progress>
</div>
<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">EXPRESS JS</h3>
<progress className="progress progress-accent rounded-none w-80 md:w-full bg-orange-700" value="85" max="100">HTML</progress>
</div>


</div>

<div className="flex flex-col space-y-5">
<h2 className="text-2xl font-bold text-orange-400 pb-2 border-b-4 mb-8">Database</h2>

<div className="flex flex-col gap-2">
    <h3 className="text-white font-semibold">MONGODB</h3>
<progress className="progress progress-accent w-80 md:w-full h-2 rounded-none bg-orange-700" value="70" max="100">HTML</progress>
</div>

</div>


     </div>

            


        </div>

<div className="bg-[#1e2c12] py-10">
<h1 className="text-center text-6xl font-semibold text-white mt-10 border-b-4 border-dotted pb-5 mx-10">CMS</h1>

<div className="flex flex-col gap-2 w-[250px] md:w-[450px] mx-10 mt-5 " data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                <div className="flex flex-row justify-between mt-5">
                  <h3 className="text-white font-semibold">WordPress</h3>
                  <h3 className="text-white font-semibold">85%</h3>
                </div>
                <progress className="progress progress-success w-full md:w-full h-2 rounded-md bg-sky-700" value="85" max="100">HTML</progress>
              </div>

     </div> */}
     </>
    );
};

export default Skill;