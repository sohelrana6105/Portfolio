import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "VS Code", "Postman", "npm", "Figma"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Problem-solving", "Critical Thinking"],
  },
];

// Variants for stagger animation container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for each badge (button-like)
const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.1,
    backgroundColor: "#0284c7", // Tailwind sky-600
    color: "#fff",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export default function Skills() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 ">
      <section
        id="skills"
        className="max-w-7xl mx-auto px-4 lg:p-0 sm:px-6 py-10"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-gray-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {skillCategories.map(({ category, skills }) => (
            <motion.div
              key={category}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-sky-600">
                {category}
              </h3>
              <motion.ul
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="cursor-pointer px-3 py-1 rounded-full text-sm font-medium border border-sky-400 text-sky-800 dark:text-sky-200 dark:border-sky-600 whitespace-nowrap"
                    variants={badgeVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
