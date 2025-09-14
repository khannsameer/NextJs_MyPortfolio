import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// container: triggers staggered animations for all children
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

// headings bounce + rotate slightly
const headingVariant = {
  hidden: { opacity: 0, y: -50, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

// paragraph fade in + slight scale
const paragraphVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// buttons pop-in with hover bounce
const buttonVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140 },
  },
};

// profile image float + scale effect
const profileVariant = {
  hidden: { opacity: 0, scale: 0.7, y: -20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
  hover: { y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2 } }, // gentle floating effect
};

const Header = () => {
  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile image */}
      <motion.div variants={profileVariant} whileHover="hover">
        <Image
          src={assets.prof}
          alt="profile photo"
          className="rounded-full w-32"
        />
      </motion.div>

      {/* Greetings */}
      <motion.h3
        variants={headingVariant}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Sameer Khan
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        variants={headingVariant}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Full Stack Developer
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={paragraphVariant}
        className="max-w-2xl mx-auto font-ovo text-gray-600 dark:text-gray-400"
      >
        I’m a passionate Full Stack Developer skilled in creating responsive,
        user-friendly web applications. I work with modern frontend frameworks
        like React.js and Next.js, and build robust backends using Node.js,
        Express.js, and MongoDB.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={container}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        {/* Contact button */}
        <motion.div
          variants={buttonVariant}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          <Link
            href="#contact"
            className="px-10 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 shadow-md dark:shadow transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Contact me
            <Image
              src={assets.right_arrow_white}
              alt="right arrow"
              className="w-4 dark:invert"
            />
          </Link>
        </motion.div>

        {/* Resume button */}
        <motion.div
          variants={buttonVariant}
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
        >
          <Link
            href="/my-resume.pdf"
            download
            className="px-10 py-3 rounded-full border border-gray-500 text-gray-800 dark:text-gray-200 flex items-center gap-2 transition-all duration-300 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            My resume
            <Image
              src={assets.download_icon}
              alt="download icon"
              className="w-4 dark:invert"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
