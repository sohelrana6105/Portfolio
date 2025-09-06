import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12"> */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 flex flex-col gap-5 sm:gap-0 md:flex-row items-start justify-between">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-gray-200">
            About Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-72">
            Hi, I'm Sohel Rana, a passionate MERN stack developer focused on
            creating scalable web applications with excellent user experience.
            Always eager to learn and deliver quality work.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-gray-200">
            Contact Info
          </h3>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-sky-600 dark:text-gray-200" />
              <span>Birgonj, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-sky-600 dark:text-gray-200" />
              <a
                href="mailto:sohelrana6105@example.com"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                dev.sohelrana@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-sky-600 dark:text-gray-200" />
              <a
                href="tel:+8801234567890"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                +880 1761050922
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 text-2xl text-sky-600 dark:text-gray-200">
            <a
              href="https://github.com/sohelrana6105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-sky-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sohel-rana-7aa40a379/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/sohelrana6105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-700 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sohel Rana. All rights reserved.
      </div>
    </motion.footer>
  );
}
