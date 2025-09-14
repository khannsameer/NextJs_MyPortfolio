import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Parent container for stagger effect
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

// Cards slide in from left
const cardVariant = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Profile picture – pop/rotate in
const profileVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Simple fade-up for headings / paragraphs
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.div
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // ✅ animate every time in view
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        variants={fadeUp}
        className="text-center mb-2 text-xl font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2 variants={fadeUp} className="text-center text-5xl font-ovo">
        About me
      </motion.h2>

      <motion.div
        variants={container}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* ✅ Profile picture with its own animation */}
        <motion.div
          variants={profileVariant}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.prof} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Text + cards */}
        <motion.div variants={container} className="flex-1">
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mb-10 font-ovo text-gray-600 dark:text-gray-400"
          >
            I’m Sameer Khan, a passionate Full Stack Developer who enjoys
            building modern, responsive, and scalable web applications. I
            specialize in frontend technologies like React.js and Next.js, and
            backend development with Node.js, Express.js, and MongoDB. I love
            turning ideas into user-friendly digital solutions while
            continuously learning and exploring new technologies.
          </motion.p>

          {/* ✅ Info cards slide from left each time */}
          <motion.ul
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
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

          <motion.h4 variants={fadeUp} className="my-6 font-ovo">
            Tools I use
          </motion.h4>

          {/* Tools icons – same left-to-center slide */}
          <motion.ul
            variants={container}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.1, y: -4 }}
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
