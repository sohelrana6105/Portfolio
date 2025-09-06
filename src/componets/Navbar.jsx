import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeButton from "./Share/ThemeButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` z-30 bg-white/80 dark:border-2 dark:border-gray-600  dark:text-gray-200  backdrop-blur-md shadow-sm
       
        ${scrolled ? "dark:bg-gray-700" : "dark:bg-gray-900 "}
        
        `}

      // className={`
      //   fixed w-full z-30 backdrop-blur-md transition-colors duration-300
      //   ${
      //     scrolled
      //       ? "bg-white dark:bg-gray-900 dark:border-gray-600 shadow-md"
      //       : "bg-white/80 dark:bg-gray-900/80 dark:border-2 dark:border-gray-600 shadow-sm"
      //   }
      // `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 dark:border-white">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            {/* home logo section */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
              className="text-xl font-bold text-slate-900"
            >
              <img
                className="h-11 w-11 rounded-full"
                src="/assets/Sohel_facebook.jpg"
                alt="Soher rana"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                // className="text-slate-700 hover:text-sky-600 transition"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                {link.label}
              </button>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://github.com/sohelrana6105"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:text-slate-900 dark:text-blue-400 dark:hover:text-gray-00"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sohel-rana-7aa40a379/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:text-slate-900 dark:text-blue-400"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* theme button */}
            <ThemeButton></ThemeButton>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/150NEF9U1wTMZZsB8ILeXwTf3gbLrXwWw/view?usp=sharing"
              download
              className="ml-4 px-4 py-2 border border-slate-300 rounded-md text-sm hover:bg-sky-50"
              target="_balnk"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            {/* theme button */}
            <ThemeButton></ThemeButton>

            {/* Mobile Menu Button */}
            <div className="md:hidden ">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md text-slate-700 "
              >
                {open ? (
                  <FiX
                    className="text-slate-400 hover:text-slate-100"
                    size={24}
                  />
                ) : (
                  <FiMenu
                    className=" text-slate-400 hover:text-slate-100"
                    size={24}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden dark:bg-gray-800 border-t dark:border-gray-700 border-gray-300 shadow-2xl">
          <div className="px-4 py-3 space-y-2 ">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-2 py-2 rounded hover:bg-slate-300  hover:dark:text-gray-700"
              >
                {link.label}
              </button>
            ))}

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700  dark:text-blue-400"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700  dark:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="ml-auto px-3 py-2 border border-slate-300 rounded text-sm"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
