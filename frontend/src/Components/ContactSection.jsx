import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const ContactSection = () => {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        To Contact
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl gradient-text mb-5 lg:mb-10">
            Get in Touch 
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:vinnumaram@gmail.com"
              className="text-emerald-400 font-serif  text-lg lg:text-2xl"
            >
              vinnumaram@gmail.com
            </a>
            <a
              href="tel:+917801026291"
              className="text-emerald-400 font-serif  text-lg lg:text-2xl"
            >
              +91 7801026291
            </a>
          </div>
          <div className="flex gap-2 mt-2">
      <a href="https://github.com/Vignesh-2109" target="_blank" rel="noopener noreferrer">
        <AiFillGithub className="text-white text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/vignesh-maram-b1209b147/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className="text-sky-700 text-2xl" />
      </a>
      <a href="https://www.instagram.com/vignesh_maram?igsh=MWVsb3o5aXF5dmxwYQ==" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className="text-red-500 text-2xl" />
      </a>
    </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;