import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      {/* Heading with typewriter */}
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
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

      <motion.div
        className="max-w-3xl mx-auto bg-gradient-to-r from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h3
          className="text-3xl font-semibold text-sky-700 dark:text-sky-400 mb-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Bachelor’s Degree (Ongoing)
        </motion.h3>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-4"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="font-semibold">Major:</span> Political Science
        </motion.p>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="font-semibold">Institution:</span> Birgonj Govt
          College (Honours)
        </motion.p>

        <motion.p
          className="italic text-gray-600 dark:text-gray-400 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Currently pursuing Bachelor’s degree in Political Science.
        </motion.p>
      </motion.div>
    </section>
  );
}
