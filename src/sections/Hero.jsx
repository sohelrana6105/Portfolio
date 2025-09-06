import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section
        id="home"
        // className="dark:bg-gray-900 max-w-7xl flex flex-col md:flex-row items-center justify-center  lg:justify-end px-4 sm:px-0 py-10 "
        className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-7 sm:px-7 lg:px-0 py-10  scroll-mt-96 md:scroll-mt-96 lg:scroll-mt-24"
      >
        {/* Text content */}
        <motion.div
          className="max-w-6xl text-center md:text-left "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-3 dark:text-gray-200">
            Sohel Rana
          </h1>
          <h2 className="text-2xl text-sky-600  mb-4 h-8">
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
          <p className="mb-6 max-w-md mx-auto md:mx-0 dark:text-gray-200">
            Passionate about building interactive web experiences using React
            and modern JavaScript.
          </p>

          <a
            href="https://drive.google.com/file/d/150NEF9U1wTMZZsB8ILeXwTf3gbLrXwWw/view?usp=sharing"
            download
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition"
            target="_blank"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/assets/Sohel_facebook.jpg"
            alt="Sohel Rana"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}
