import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Container for stagger
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

// Headings fade from left
const headingVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

// Paragraph slides up with bounce
const paragraphVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// Cards rotate & scale in from bottom
const cardVariant = {
  hidden: { opacity: 0, y: 40, rotate: -5, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 15 },
  },
};

const Services = () => {
  return (
    <motion.div
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section Headings */}
      <motion.h4
        variants={headingVariant}
        className="text-center mb-2 text-xl font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        variants={headingVariant}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        variants={paragraphVariant}
        className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 mb-12 font-ovo"
      >
        I specialize in building modern, responsive, and scalable web
        applications. From frontend design to backend development, I create
        seamless digital experiences tailored to your needs.
      </motion.p>

      {/* Service Cards */}
      <motion.ul variants={container} className="grid grid-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.li
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="group border border-gray-400 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer
            transition-all duration-300 ease-out hover:shadow-xl dark:hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
              <Image src={icon} alt={title} className="w-10" />
            </div>

            <h3 className="text-lg my-4 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
              {title}
            </h3>

            <p className="text-sm leading-5 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
              {description}
            </p>

            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src={assets.right_arrow}
                alt="right arrow"
                className="w-4 dark:invert"
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Services;
