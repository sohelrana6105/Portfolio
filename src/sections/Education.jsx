import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Education() {
  return (
    <div className="">
      <section
        id="education"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-0  py-10 scroll-mt-96 md:scroll-mt-96 lg:scroll-mt-24"
      >
        {/* Heading with typewriter */}
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wide 
          text-transparent bg-clip-text bg-gradient-to-r 
          from-sky-500 to-blue-600 dark:from-gray-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typewriter
            words={["Educational Qualification"]}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={2500}
            loop={1}
          />
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Bachelor's Card */}
          <div
            className="dark:bg-gradient-to-r from-white to-sky-50 
          dark:from-gray-900 dark:to-sky-800 
          rounded-2xl shadow-sm dark:shadow-lg p-6 dark:border dark:border-gray-700 
          hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-400 mb-2">
              Bachelor's Degree (Ongoing)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Major: Political Science
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Birgonj Govt College (Honours)
            </p>
            <p className=" text-gray-600 dark:text-gray-400 ">
              Currently pursuing Bachelor's degree.
            </p>
          </div>

          {/* HSC Card */}
          <div
            className="dark:bg-gradient-to-r from-white to-sky-50 
          dark:from-gray-900 dark:to-sky-800 
          rounded-2xl shadow-sm dark:hadow-lg p-6 dark:border dark:border-gray-700 
          hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-400 mb-2">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Group: Humanities/Arts
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Dinajpur Adarsha College
            </p>
            <p className=" text-gray-600 dark:text-gray-400 ">Passed in 2020</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
