import React, { useState } from "react";
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5999/api/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-3xl">Contact form</h3>
                <p className="text-sm mt-4 leading-relaxed">Select Your Service 😎</p>
              </div>

              <label className="input input-bordered flex items-center gap-2">
                <img src="/image/contactformsvg/user-svgrepo-com.svg" className="object-contain w-5" alt="" />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <img src="/image/contactformsvg/email-svgrepo-com.svg" className="object-contain w-5" alt="" />
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Valid Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <img src="/image/contactformsvg/phone-calling-svgrepo-com.svg" className="object-contain w-5" alt="" />
                <input
                  type="number"
                  name="phone"
                  className="grow"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              {/* Services */}
              <label className="input input-bordered flex items-center gap-2">
                <img src="/image/contactformsvg/computer-svgrepo-com.svg" className="object-contain w-5" alt="" />
                <input
                  type="text"
                  name="service"
                  className="grow"
                  placeholder="Service"
                  value={formData.service}
                  onChange={handleChange}
                />
              </label>

              {/* Description */}
              <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
                <img src="/image/contactformsvg/pen-new-square-svgrepo-com.svg" className="object-contain w-5" alt="" />
                <textarea
                  name="message"
                  className="grow text-gray-800 border-0 px-4 py-2 rounded-lg outline-none resize-none"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
              </div>

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
    </div>
  );
};

export default ContactUs;
