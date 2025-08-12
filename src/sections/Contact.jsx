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
    <div>
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 sm:px-8 py-20"
        aria-label="Contact Section"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-sky-600 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 flex flex-col space-y-8 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Contact Details */}
          <div className="flex flex-col space-y-6 max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-sky-600 dark:text-sky-400 text-3xl" />
              <a
                href="mailto:sohelrana6105@example.com"
                className="text-lg font-medium hover:underline break-all"
              >
                sohelrana6105@example.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-sky-600 dark:text-sky-400 text-3xl" />
              <a
                href="tel:+8801234567890"
                className="text-lg font-medium hover:underline"
              >
                +880 1234 567 890
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-sky-600 dark:text-sky-400 text-3xl" />
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:underline"
              >
                +880 1234 567 890
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-10 mt-10 text-sky-600 dark:text-sky-400 text-3xl">
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
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-sky-700 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </section>

      <ContactForm />
    </div>
  );
}
