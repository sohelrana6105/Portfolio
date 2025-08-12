import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/sohelrana6105",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sohel-rana-7aa40a379/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/sohelrana6105",
      label: "Twitter",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/sohel.sohel.605107",
      label: "Facebook",
    },
  ];

  return (
    <div className="flex space-x-6 justify-center md:justify-start mt-6">
      {socials.map(({ icon, url, label }) => (
        <motion.a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate-700 text-2xl"
          whileHover={{ scale: 1.2, color: "#0284c7" }} // sky-600 color
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}
