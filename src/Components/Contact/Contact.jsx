import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div  className="bg-[#1e2c12] h-auto lg:h-screen pt-28 px-10 pb-10 text-white">
            <h2 className="text-center text-5xl font-semibold">Contact Me</h2>
            <p className="text-center mt-7 font-semibold text-lg">Below are the details to reach out to me!</p>

            <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 justify-center">

        <div className="flex flex-col items-center gap-5 border rounded-md p-10">
        <FaRegAddressCard className="h-14 w-14 text-orange-600" />
        <h3 className="text-center">Address</h3>
            <p className="text-center mt-5">Rahamatpur, Mymensingh</p>
        </div>

        <div className="flex flex-col items-center gap-5 border rounded-md p-10">
        <FaPhoneAlt className="h-14 w-14 text-orange-600" />
        <h3 className="text-center">Contact Number</h3>
            <p className="text-center mt-5">01956230265</p>
        </div>

        <div className="flex flex-col items-center gap-5 border rounded-md p-10">
        <MdEmail className="h-14 w-14 text-orange-600" />
        <h3 className="text-center">Email</h3>
            <p className="text-center mt-5">asfaqurrahman055@gmail.com</p>
        </div>



            </div>

            <h2 className="text-center mt-10  text-xl">Have a question ? <button className="btn bg-amber-700 border-none hover:bg-yellow-600 text-white text-xl">Click here</button></h2>
        </div>
    );
};

export default Contact;