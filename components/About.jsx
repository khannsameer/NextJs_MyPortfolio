import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Parent container for stagger
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

// Headings slide from left + skew
const headingVariant = {
  hidden: { opacity: 0, x: -50, skewX: 5 },
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

// Paragraph fade + upward float + scale
const paragraphVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

// Info cards diagonal pop + rotate
const cardVariant = {
  hidden: { opacity: 0, x: 30, y: 30, rotate: -3, scale: 0.85 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 15 },
  },
};

// Profile image floating diagonally
const profileVariant = {
  hidden: { opacity: 0, scale: 0.7, rotate: -45 }, // start tilted
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0, // upright
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

// Tools icons pop-in from bottom + rotate slightly
const toolVariant = {
  hidden: { opacity: 0, y: 20, rotate: -5, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 12 },
  },
};

const About = () => {
  return (
    <motion.div
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        variants={headingVariant}
        className="text-center mb-2 text-xl font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        variants={headingVariant}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        variants={container}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile picture */}
        <motion.div
          variants={profileVariant}
          initial="hidden"
          whileInView="show" // triggers whenever scrolled into view
          viewport={{ once: false, amount: 0.5 }} // animate every time
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.prof} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Text + info cards */}
        <motion.div variants={container} className="flex-1">
          <motion.p
            variants={paragraphVariant}
            className="max-w-3xl mb-10 font-ovo text-gray-600 dark:text-gray-400"
          >
            I’m Sameer Khan, a passionate Full Stack Developer who enjoys
            building modern, responsive, and scalable web applications. I
            specialize in frontend technologies like React.js and Next.js, and
            backend development with Node.js, Express.js, and MongoDB. I love
            turning ideas into user-friendly digital solutions while
            continuously learning and exploring new technologies.
          </motion.p>

          {/* Info cards */}
          <motion.ul
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
                className="group border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-8 cursor-pointer
                  transition-all duration-300 ease-out hover:shadow-lg dark:hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                  <Image src={icon} alt={title} className="w-7" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 variants={headingVariant} className="my-6 font-ovo">
            Tools I use
          </motion.h4>

          {/* Tools icons */}
          <motion.ul
            variants={container}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={toolVariant}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-14 sm:w-14 aspect-square p-3 border border-gray-400 rounded-lg bg-white dark:bg-gray-900 cursor-pointer transition-all duration-300 ease-out hover:shadow-xl dark:hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                <Image src={tool} alt="Tools" className="w-10 sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
