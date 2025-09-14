import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowToast(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "49cd52e8-baa0-4740-9084-50c827b6de9d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully 🎉");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("" + data.message);
    }

    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div id="contact" className="relative w-full px-[12%] py-16 scroll-mt-20">
      {/* Gradient background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-[400px] bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-black blur-3xl opacity-70"></div>
      </div>

      {/* Content */}
      <h4 className="text-center mb-2 text-xl font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 mb-12 font-ovo">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate. Whether you have a question, want to work
        together, or just want to say hi, feel free to reach out.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none rounded-md bg-white text-gray-900 placeholder-gray-500
                 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none rounded-md bg-white text-gray-900 placeholder-gray-500
                 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none rounded-md bg-white text-gray-900 placeholder-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm mb-6"
        ></textarea>

        <button
          type="submit"
          className="relative py-3 px-10 w-max flex items-center justify-center font-medium text-white rounded-full mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/20
             transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Submit
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </span>

          {/* Shimmer effect */}
          <span className="absolute inset-0 rounded-full before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:skew-x-12 hover:before:translate-x-full before:transition-transform before:duration-700" />
        </button>
      </form>

      {/* ✅ Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white font-medium 
    ${result.includes("Successfully") ? "bg-green-600" : "bg-blue-600"} 
    transition-all duration-500 animate__animated animate__fadeInUp`}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default Contact;
