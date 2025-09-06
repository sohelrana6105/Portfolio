import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <section
        id="home"
        className="max-w-7xl w-full mx-auto  px-4 sm:px-6 lg:px-10 xl:px-0   flex flex-col-reverse md:flex-col lg:flex-row lg:items-center justify-center gap-10"
      >
        {/* Text content */}

        <motion.div
          className="flex-1   text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-bold mb-6 dark:text-gray-200">
            Hello, I'm <span className="text-sky-600">Sohel Rana</span>
          </h1>

          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 h-12 text-sky-600">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Enthusiast",
                "JavaScript Developer",
                "MERN Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mb-6 max-w-xl text-gray-700 dark:text-gray-200 mx-auto md:mx-0 leading-relaxed">
            I'm passionate about building scalable, interactive, and
            user-focused web experiences using React and modern JavaScript
            technologies.
          </p>

          {/* social Icons */}
          <div className="flex mb-6 gap-5">
            {/* github */}
            <a
              href="https://github.com/sohelrana6105"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 border dark:text-white border-slate-500 rounded text-sm 
                transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500  hover:shadow-lg hover:shadow-indigo-300/50
                active:scale-95
                "
            >
              <FaGithub size={20} />
            </a>
            {/* linkdin */}
            <a
              href="https://www.linkedin.com/in/sohel-rana-7aa40a379/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 border dark:text-white border-slate-500 rounded text-sm 
                transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500  hover:shadow-lg hover:shadow-indigo-300/50
                active:scale-95
                "
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#about"
              rel="noreferrer"
              className="px-3 py-2 border dark:text-white border-slate-500 rounded text-sm 
                transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500  hover:shadow-lg hover:shadow-indigo-300/50
                active:scale-95
                "
            >
              About me
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/150NEF9U1wTMZZsB8ILeXwTf3gbLrXwWw/view?usp=sharing"
            download
            // className="inline-block bg-sky-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition"
            className="inline-block font-medium px-6 py-3 dark:text-white  shadow-md border border-slate-500 rounded text-sm 
                transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500  hover:shadow-lg hover:shadow-indigo-300/50
                active:scale-95"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/assets/Sohel_facebook.jpg"
            alt="Sohel Rana"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px]   xl:w-[450px] xl:h-[450px] rounded-full object-cover shadow-lg "
          />
        </motion.div>
      </section>
    </div>
  );
}
