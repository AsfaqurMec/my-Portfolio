import { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactService } from "../../services/contactService";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9+()\-\s]{8,20}$/.test(formData.mobile)) {
      nextErrors.mobile = "Please enter a valid mobile number.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Description is required.";
    } else if (formData.description.trim().length < 50) {
      nextErrors.description = "Description must be at least 50 characters.";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      await contactService.sendMessage({
        ...formData,
        to: "asfaqurrahman055@gmail.com",
      });

      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        description: "",
      });
      setShowSuccessModal(true);
    } catch (error) {
      setSubmitError(error?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 section-container pb-16">
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

      <div className="mt-12 card-light p-8 md:p-10 text-center border border-indigo-200/20">
        <h3 className="text-2xl font-semibold text-slate-100">Let&apos;s Discuss Your Project</h3>
        <p className="mt-3 text-stone-400 max-w-2xl mx-auto">
          Share your requirements and I will get back to you with a clear response and next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitError("");
            setIsModalOpen(true);
          }}
          className="mt-6 inline-flex items-center justify-center px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-900/30"
        >
          Let&apos;s Discuss
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-2xl rounded-2xl border border-indigo-200/20 bg-slate-900 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-indigo-200/15 px-6 py-4">
              <h4 className="text-xl font-semibold text-slate-100">Send a Message</h4>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg px-3 py-1.5 text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {submitError && (
                <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-200 text-sm px-4 py-3">
                  {submitError}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                />
                {errors.name && <p className="text-rose-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                  />
                  {errors.email && <p className="text-rose-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-stone-300 mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+8801XXXXXXXXX"
                    className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400"
                  />
                  {errors.mobile && <p className="text-rose-400 text-sm mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Description (Minimum 50 characters)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your project, goals, and any key requirements..."
                  className="w-full rounded-xl border border-white/15 bg-slate-950 text-stone-200 px-4 py-3 outline-none focus:border-indigo-400 resize-none"
                />
                <div className="mt-1 flex justify-between text-xs">
                  <span className="text-stone-500">Be as specific as possible.</span>
                  <span className={`${formData.description.trim().length >= 50 ? "text-emerald-400" : "text-stone-500"}`}>
                    {formData.description.trim().length}/50
                  </span>
                </div>
                {errors.description && <p className="text-rose-400 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl border border-white/15 text-stone-200 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
            aria-hidden="true"
          />
          <div
            className="relative w-full max-w-md rounded-2xl border border-emerald-500/25 bg-slate-900 shadow-2xl shadow-black/50 p-8 text-center"
            role="dialog"
            aria-labelledby="success-title"
            aria-modal="true"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 text-2xl font-bold">
              ✓
            </div>
            <h3 id="success-title" className="text-xl font-semibold text-slate-100">
              Message submitted
            </h3>
            <p className="mt-3 text-stone-400 text-sm leading-relaxed">
              Thank you for reaching out. Your message was received successfully. I will get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
