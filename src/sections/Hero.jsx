import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="dark:bg-gray-900 flex flex-col md:flex-row items-center  mx-auto px-4 py-20"
    >
      {/* Text content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
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
          Passionate about building interactive web experiences using React and
          modern JavaScript.
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
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
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
  );
}
