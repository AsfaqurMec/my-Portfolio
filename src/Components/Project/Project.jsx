import { Link } from "react-router-dom";


const Project = () => {
    return (
        <div className="bg-[#1e2c12] min-h-screen pt-28 px-10 pb-10 text-white">
             <h2 className="text-center text-5xl font-semibold">Projects</h2>
             <p className="text-center mt-7 font-semibold text-lg">Below are the projects on React,MongoDB,Node js!</p>

             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center mt-20 mx-auto w-full">

<Link to={'https://blood-donation-1ed49.web.app'}>
<div className="card bg-base-100 w-96 shadow-xl rounded-sm mx-auto hover:scale-110">
  <figure>
    <img
      src="https://i.ibb.co/F6kycYY/Screenshot-2024-07-16-122933.png"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222]">
    <h2 className="card-title">
      OneBlood!
      <div className="badge badge-secondary">Secure </div>
      <div className="badge badge-secondary">Creative</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">React.js</div>
      <div className="badge badge-outline">Stripe</div>
      <div className="badge badge-outline">MongoDB</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://resturant-7f83a.web.app'}>
<div className="card bg-base-100 w-96 shadow-xl rounded-sm mx-auto hover:scale-110">
  <figure>
    <img
      src="https://i.ibb.co/hM6cFpx/Screenshot-2024-07-16-123100.png"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222]">
    <h2 className="card-title">
    DineEase!
      <div className="badge badge-secondary">Responsive</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">React.js</div>
      <div className="badge badge-outline">Node.js</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://tourism-41ddf.web.app'}>

<div className="card bg-base-100 w-96 shadow-xl rounded-sm mx-auto hover:scale-110">
  <figure>
    <img
      src="https://i.ibb.co/XjC4F63/Screenshot-2024-07-16-123221.png"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222]">
    <h2 className="card-title">
    ExploreEpic
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</Link>

<Link to={'https://review-book-site.netlify.app'}>
<div className="card bg-base-100 w-96 shadow-xl rounded-sm mx-auto hover:scale-110">
  <figure>
    <img
      src="https://i.ibb.co/NsWgZGz/Screenshot-2024-07-16-123448.png"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#232222]">
    <h2 className="card-title">
    Book Vibe
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</Link>

             </div>
        </div>
    );
};

export default Project;