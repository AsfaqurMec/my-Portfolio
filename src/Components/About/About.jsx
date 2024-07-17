import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const About = () => {
    return (
        <div className="bg-[#1e2c12] min-h-screen pt-28 px-10 pb-10 text-white">
            <h2 className="text-3xl mb-10 font-bold text-teal-200 pb-5 border-b-4 border-dotted">About Me</h2>
<div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

            <img src="images/IMG_E4927@1x_1.jpg" className="w-[25%] rounded-full shadow-2xl object-cover" />
             
            <h2 className="text-2xl font-semibold">Front-end Developer</h2>
            <h3 className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 pb-2">Skills :</h3>
            <p className="text-xl font-semibold ">React | Node Js | Express js | MongoDB | JavaScript | <br /> Css | Html
</p>

<h3 className="border-b-4 border-dotted w-full text-3xl font-semibold text-orange-600 pb-2">Education :</h3>
 
<p className="text-xl font-medium">Mymensingh Engineering College,Mymensingh</p>
<p className="text-xl font-medium">BSc in Computer Science and Engineering</p>
<p className="text-xl font-medium">November, 2022 - current</p>






            </div>






            <div  className="w-full lg:w-1/2 flex flex-col items-start space-y-5">

            <p className="text-3xl text-orange-600 font-semibold">Front-end Developer</p>
             
             <p className="text-lg font-medium">I'm Asfaqur Rahman, a front-end developer
proficient in HTML, CSS, JavaScript,React,
and Tailwind CSS. With a passion for crafting
engaging digital experiences, I specialize in
translating designs into seamless, responsive
code. I'm dedicated to delivering top-notch
solutions. Collaborative by nature, I enjoy
working closely with designers and
stakeholders to bring ideas to life.</p>

<h3 className="border-b-4 border-dotted w-full text-2xl font-semibold text-orange-600 pb-2">Experience :</h3>
 
<p className="text-xl font-semibold"><a href="https://flexsoftr.com/our-team/" className="text-sky-600 text-3xl font-bold">FlexSoftr</a> , Dhaka — React.js Developer</p>
<p className="text-xl font-semibold">As a React.js developer, I'll build UIs, manage state,
optimize performance, integrate APIs, collaborate with
teams, and ensure code quality.</p>
<p className="text-xl font-semibold">May 2024 - PRESENT</p>

<div className="flex flex-row justify-start gap-5">
<FaFacebook className="h-10 text-orange-500 w-10" />
<FaGithub className="h-10 text-orange-500 w-10" />
<FaLinkedin className="h-10 text-orange-500 w-10" />

</div>


            </div>

            </div>

        </div>
    );
};

export default About;