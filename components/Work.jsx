import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Parent container: handles staggered animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

// Headings / text fade-up
const textItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Project cards: slide from left to center
const cardItem = {
  hidden: { opacity: 0, x: -120 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Work = () => {
  return (
    <motion.div
      id="work"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // 🔑 animate every time section is visible
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section Headings */}
      <motion.h4
        variants={textItem}
        className="text-center mb-2 text-xl font-ovo"
      >
        Projects
      </motion.h4>

      <motion.h2 variants={textItem} className="text-center text-5xl font-ovo">
        My Works
      </motion.h2>

      <motion.p
        variants={textItem}
        className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 mb-12 font-ovo"
      >
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {workData.map(
          ({ name, description, tags, image, source_code_link }, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="group border border-gray-400 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer
                transition-all duration-300 ease-out hover:shadow-xl dark:hover:shadow-2xl
                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              <Image
                src={image}
                alt={name}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 font-ovo">
                {name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-ovo">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-ovo">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full font-medium leading-tight
                      ${
                        tag.color === "blue-text-gradient"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200"
                          : tag.color === "green-text-gradient"
                          ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200"
                          : tag.color === "pink-text-gradient"
                          ? "bg-pink-100 text-pink-600 dark:bg-pink-800 dark:text-pink-200"
                          : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <Link
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline font-ovo"
              >
                View Source →
              </Link>
            </motion.div>
          )
        )}
      </motion.div>

      {/* Show More Button */}
      <motion.div variants={textItem}>
        <Link
          href=""
          className="w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auto my-20 text-gray-700 border border-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-white dark:hover:text-black"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Work;
