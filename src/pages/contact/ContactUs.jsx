import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backendportfolio-six.vercel.app/api/contact/send",
        formData
      );
      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Error sending email. Please try again.");
    }
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-3xl">Contact form</h3>
                <p className="text-sm mt-4 leading-relaxed">
                  Select Your Service 😎
                </p>
              </div>

              <label className="input input-bordered flex items-center gap-2">
                <img
                  src="/image/contactformsvg/user-svgrepo-com.svg"
                  className="object-contain w-5"
                  alt=""
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Full name"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <img
                  src="/image/contactformsvg/email-svgrepo-com.svg"
                  className="object-contain w-5"
                  alt=""
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Valid email ID"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <img
                  src="/image/contactformsvg/phone-calling-svgrepo-com.svg"
                  className="object-contain w-5"
                  alt=""
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Phone number"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <img
                  src="/image/contactformsvg/computer-svgrepo-com.svg"
                  className="object-contain w-5"
                  alt=""
                />
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Service"
                  required
                />
              </label>
              <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
                <img
                  src="/image/contactformsvg/pen-new-square-svgrepo-com.svg"
                  className="object-contain w-5"
                  alt=""
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="grow text-gray-800 border-0 px-4 py-2 rounded-lg outline-none resize-none"
                  placeholder="Your message here"
                  required
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-blue-500 hover:underline"
                  >
                    Map
                  </button>
                </div>
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-lg w-full h-96 relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                    <h3 className="font-bold text-lg mb-4">Location</h3>
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31217.71352680924!2d75.34767172641374!3d12.028770118889245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43f8da119a579%3A0x71a5623da78b0f89!2sTaliparamba%2C%20Kerala!5e0!3m2!1sen!2sin!4v1722922631743!5m2!1sen!2sin"
                        className="w-full lg:h-72"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="/image/personal/login.png"
              className="w-fit h-full max-md:w-4/5 mx-auto block object-fill"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex px-36 gap-3 py-12">
        <div className="flex flex-col gap-3 p-3 border-2 w-full rounded-lg">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="flex flex-col gap-3 p-3 border-2 w-full rounded-lg">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="flex flex-col gap-3 p-3 border-2 w-full rounded-lg">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="flex flex-col gap-3 p-3 border-2 w-full rounded-lg">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
