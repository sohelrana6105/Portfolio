import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./projectsinfo";

export default function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="px-6 sm:px-10 py-20 max-w-screen-xl mx-auto"
        aria-label="Projects Section"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-14 text-center text-sky-600 tracking-wide"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map(({ id, name, image, techStack, liveLink }) => (
            <motion.article
              key={id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt={`${name} project screenshot`}
                  className="object-cover w-full h-48 md:h-52 lg:h-56 transform hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1 gap-5">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-400 text-center">
                  {name}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-sky-100 dark:bg-sky-800 text-sky-800 dark:text-sky-200 px-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 justify-center">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live site for ${name}`}
                    className="bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition px-4 py-2 flex items-center justify-center space-x-2"
                  >
                    <FaGlobe />
                    <span className="text-sm">Live Site</span>
                  </a>

                  <Link
                    to={`/projects/${id}`}
                    aria-label={`View details of ${name}`}
                    className="border border-sky-600 text-sky-600 font-semibold rounded-lg shadow-md hover:bg-sky-600 hover:text-white transition px-4 py-2 flex items-center justify-center space-x-2"
                  >
                    <span className="text-sm">View Details</span>
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
