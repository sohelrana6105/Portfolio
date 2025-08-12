import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

  return (
    <header className=" z-30 bg-white/80 backdrop-blur-md shadow-sm">
      <div className=" mx-auto px-4 sm:px-6">
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
              Sohel Rana
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-slate-700 hover:text-sky-600 transition"
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
                className="text-slate-700 hover:text-slate-900"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sohel-rana-7aa40a379/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:text-slate-900"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-4 py-2 border border-slate-300 rounded-md text-sm hover:bg-sky-50"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-2 py-2 rounded hover:bg-slate-100"
              >
                {link.label}
              </button>
            ))}

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700"
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
