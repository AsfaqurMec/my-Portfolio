import { Link } from "react-router-dom";
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
const Project = () => {
    return (
        <div className="bg-[#081506] min-h-screen pt-28 px-5 md:px-10 pb-10 text-white">
             <h2 className="text-center text-5xl font-semibold">Projects</h2>
             <p className="text-center mt-7 font-semibold text-lg">Below are the projects on <span className="text-orange-600 font-bold"> Full Stack! </span> & <span className="text-sky-600 font-bold"> WordPress</span></p>


             
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

          <h2 className="text-center text-5xl font-semibold mb-5 mt-14">M E R N Stack!</h2>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">

            <Link to={'https://as-global.vercel.app/'}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card glass  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full"
                    src={as}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-[#232222] rounded-b-lg">
                  <h2 className="card-title">
                    AS Global Styles
                    <div className="badge badge-warning">Garment</div>

                  </h2>
                  <p>A garment Website using Next.js, React, MongoDB.</p>
                  <div className="card-actions justify-end">
                    <div className="badge bg-amber-600 pb-[2px]  badge-outline">React</div>
                    <div className="badge bg-amber-600 pb-[2px]  badge-outline">Next Js</div>
                    <div className="badge bg-amber-600 pb-[2px]  badge-outline">MongoDB</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={'https://schedular-asl.vercel.app/'}>
                          <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                            <figure>
                              <img className="h-48 w-full"
                                src={asl}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body bg-[#232222] rounded-b-lg">
                              <h2 className="card-title">
                                Smart Class Scheduler ASL
                                <div className="badge badge-info">Schedular</div>
            
                              </h2>
                              <p>A smart class scheduling Website using Next.js, React, MongoDB.</p>
                              <div className="card-actions justify-end">
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">Next Js</div>
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
                              </div>
                            </div>
                          </div>
                        </Link>
            
                        <Link to={'https://exponential-du.vercel.app/'}>
                          <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                            <figure>
                              <img className="h-48 w-full"
                                src={exponential}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body bg-[#232222] rounded-b-lg">
                              <h2 className="card-title">
                                Exponential DU
                                <div className="badge badge-info">Online Course</div>
            
                              </h2>
                              <p>A online course Website using Next.js, React, MongoDB.</p>
                              <div className="card-actions justify-end">
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">Next Js</div>
                                <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
                              </div>
                            </div>
                          </div>
                        </Link>
            


             <Link to={'https://www.masuafoundation.org/'}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full"
                    src={img6}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-[#232222] rounded-b-lg">
                  <h2 className="card-title">
                    Masua Foundation
                    <div className="badge badge-info">Foundation</div>

                  </h2>
                  <p>A responsive Website using Next.js, React, MongoDB.</p>
                  <div className="card-actions justify-end">
                    <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
                    <div className="badge bg-sky-600 pb-[2px]  badge-outline">Next Js</div>
                    <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
                  </div>
                </div>
              </div>
            </Link>


             <Link to={'https://electro-brown.vercel.app/'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
      src={img5}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
    Electro
    <div className="badge badge-info">E-Commerce</div>
      
    </h2>
    <p>A responsive E-commerce Website using Next.js, React, MongoDB.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">React</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">Next Js</div>
      <div className="badge bg-sky-600 pb-[2px]  badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

             <Link to={'https://hospital-mu-six.vercel.app'}>
<div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222] rounded-b-lg">
    <h2 className="card-title">
    MediPro
      <div className="badge badge-success text-white">Hospital</div>
      
    </h2>
    <p>A responsive Medical Hospital Website using Next.js, React, MongoDB.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-green-600 pb-[2px]  badge-outline">React</div>
      <div className="badge bg-green-600 pb-[2px]  badge-outline">Next Js</div>
      <div className="badge bg-green-600 pb-[2px]  badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>




             <Link to={'https://trendy-threads-clothing.web.app'}>
<div className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
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
<div className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
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
<div className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full"
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

<div className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
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
<div className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
  <figure>
    <img className="h-48 w-full "
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
              
             <h2 className="text-center text-5xl font-semibold mb-5 mt-24">WordPress</h2>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">

             <Link to={'https://neosupremetech.com/'}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full"
                    src={img7}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-[#232222] rounded-b-lg">
                  <h2 className="card-title">
                    Neo Superme Tech
                  </h2>
                  <p>A responsive Website using WordPress.</p>
                  
                </div>
              </div>
            </Link>

            <Link to={'https://platinumamenity.com/'}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full"
                    src={img8}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-[#232222] rounded-b-lg">
                  <h2 className="card-title">
                  Platinum Amenity
                  </h2>
                  <p>A responsive Website using WordPress.</p>
                  
                </div>
              </div>
            </Link>

            <Link to={'https://goldenresolution.com/'}>
              <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className="card  w-full md:w-[420px] shadow-lg shadow-[#233d20] rounded-lg mx-auto hover:scale-110">
                <figure>
                  <img className="h-48 w-full"
                    src={img9}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-[#232222] rounded-b-lg">
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
        </div>
    );
};

export default Project;