import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ContactForm from "../componets/ContactForm";

export default function Contact() {
  return (
    <div id="contact" className=" scroll-mt-96 md:scroll-mt-96 lg:scroll-mt-24">
      <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-10 xl:px-0  py-10   ">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-gray-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>

        <div className="dark:border dark:border-gray-700 flex flex-col md:flex-row justify-between items-center rounded-xl shadow-xl ">
          {/* lert side */}
          <motion.div
            className="p-10 flex flex-col space-y-8 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Contact Details */}
            <div className="flex flex-col space-y-6  ">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-sky-600 dark:text-sky-400 text-3xl" />
                <a
                  href="mailto:sohelrana6105@example.com"
                  className="text-lg font-medium hover:underline break-all"
                >
                  dev.sohelranar@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-sky-600 dark:text-sky-400 text-3xl" />
                <a
                  href="tel:+8801234567890"
                  className="text-lg font-medium hover:underline"
                >
                  +8801761050922
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-sky-600 dark:text-sky-400 text-3xl" />
                <a
                  href="https://wa.me/+8801761050922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  +8801761050922
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaGithub className="text-sky-600 dark:text-sky-400 text-3xl" />

                <a
                  href="https://github.com/sohelrana6105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-sky-700 transition"
                >
                  Github
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-sky-600 dark:text-sky-400 text-3xl" />

                <a
                  href="https://www.linkedin.com/in/sohel-rana-7aa40a379/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-sky-700 transition"
                >
                  Linkdin
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaTwitter className="text-sky-600 dark:text-sky-400 text-3xl" />

                <a
                  href="https://x.com/sohelrana6105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-sky-700 transition"
                >
                  Linkdin
                </a>
              </div>
            </div>
          </motion.div>

          {/*  right side  */}
          <div className="p-6 md:p-10 w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
