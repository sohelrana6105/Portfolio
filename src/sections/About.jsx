import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900  px-7 sm:px-7 py-10"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-gray-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-center mb-10 text-xl font-semibold text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Typewriter
          words={[
            "Full Stack MERN Developer...",
            "Building Scalable Web Apps...",
            "Crafting Seamless User Experiences...",
            "Passionate About JavaScript & Node.js...",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="mb-4">
          I am <span className="font-bold text-sky-600">Sohel Rana</span>, a
          dedicated Frontend Developer specializing in building scalable,
          performant, and accessible web applications. With a solid foundation
          in HTML, CSS, and JavaScript, I have honed my skills in modern
          frameworks like React to create intuitive user interfaces that drive
          engagement and deliver seamless user experiences.
        </p>
        <p className="mb-4">
          My expertise includes writing{" "}
          <span className="text-sky-600 font-semibold">
            clean, maintainable code
          </span>{" "}
          following best practices, optimizing application performance, and
          collaborating effectively within agile teams. I am passionate about
          continuously learning emerging technologies and applying them to solve
          real-world problems.
        </p>
        <p>
          Outside of development, I engage in creative pursuits like football
          and painting, which nurture my problem-solving skills and keep my
          mindset fresh and innovative.
        </p>
      </motion.div>
    </section>
  );
}
