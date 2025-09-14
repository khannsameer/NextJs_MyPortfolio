import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// container: triggers staggered animations for all children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

// text + buttons slide in from left
const leftItem = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// profile image: fade + scale from top
const profileVariant = {
  hidden: { opacity: 0, y: -40, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Header = () => {
  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      whileInView="show" // animate whenever scrolled into view
      viewport={{ once: false, amount: 0.3 }} // <- repeat on every entry
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile image */}
      <motion.div variants={profileVariant}>
        <Image
          src={assets.prof}
          alt="profile photo"
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h3
        variants={leftItem}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Sameer Khan
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>

      <motion.h1
        variants={leftItem}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Full Stack Developer
      </motion.h1>

      <motion.p
        variants={leftItem}
        className="max-w-2xl mx-auto font-ovo text-gray-600 dark:text-gray-400"
      >
        I’m a passionate Full Stack Developer skilled in creating responsive,
        user-friendly web applications. I work with modern frontend frameworks
        like React.js and Next.js, and build robust backends using Node.js,
        Express.js, and MongoDB to deliver complete end-to-end solutions.
      </motion.p>

      <motion.div
        variants={leftItem}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        {/* Contact me button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

        {/* My resume button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
