

const Skill = () => {
    return (
        <div className="bg-[#1e2c12] h-auto lg:h-screen pt-28 px-10 pb-10">
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
    );
};

export default Skill;