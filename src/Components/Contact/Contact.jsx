import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 section-container">
      <h2 className="section-title text-center pb-6 border-b-2 border-indigo-200">Contact Me</h2>
      <p className="text-center mt-4 text-stone-500">Below are the details to reach out to me!</p>

      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-light flex flex-col items-center gap-4 p-8 text-center">
          <FaRegAddressCard className="h-12 w-12 text-indigo-600" />
          <h3 className="font-semibold text-stone-400">Address</h3>
          <p className="text-stone-500">Rahamatpur, Mymensingh</p>
        </div>
        <div className="card-light flex flex-col items-center gap-4 p-8 text-center">
          <FaPhoneAlt className="h-12 w-12 text-indigo-600" />
          <h3 className="font-semibold text-stone-400">Contact Number</h3>
          <p className="text-stone-500">01956230265</p>
          <p className="text-stone-500">01572908354</p>
        </div>
        <div className="card-light flex flex-col items-center gap-4 p-8 text-center">
          <MdEmail className="h-12 w-12 text-indigo-600" />
          <h3 className="font-semibold text-stone-400">Email</h3>
          <p className="text-stone-500 break-all">asfaqurrahman055@gmail.com</p>
        </div>
      </div>

      <p className="text-center mt-10 text-stone-500">Have a question? <span className="text-indigo-600 font-medium">Reach out via email or phone above.</span></p>
    </div>
  );
};

export default Contact;
