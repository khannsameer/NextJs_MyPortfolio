import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar animation variants
  const navVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Mobile menu animation
  const menuVariant = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const menuItemVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const menuItems = [
    { name: "Home", link: "#top" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "My Work", link: "#work" },
    { name: "Contact me", link: "#contact" },
  ];

  return (
    <>
      {/* Background blur */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <div className="w-full h-[400px] bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-black blur-3xl opacity-70"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm"
            : ""
        } transition-colors duration-300`}
      >
        {/* Logo */}
        <Link href="#top" className="mr-14 cursor-pointer">
          <Image
            src={assets.sameer}
            priority={true}
            className="w-28 dark:hidden"
            alt="Logo"
          />
          <Image
            src={assets.sameer_light}
            priority={true}
            className="w-28 hidden dark:block"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll ? "" : "bg-white/50 dark:bg-gray-900/70 shadow-sm"
          }`}
        >
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="inline-block font-ovo text-gray-800 dark:text-gray-100 
                   hover:text-indigo-600 dark:hover:text-indigo-400 
                   transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 dark:border-gray-500
            rounded-full font-ovo text-gray-800 dark:text-gray-200 transition-all duration-300 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              priority={true}
              className="w-3 dark:invert"
              alt="arrow icon"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer dark:hidden"
            />
            <Image
              src={assets.menu_white}
              alt="menu"
              className="w-6 cursor-pointer hidden dark:block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            ref={sideMenuRef}
            variants={menuVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 dark:bg-gray-900 shadow-lg"
          >
            <div
              className="absolute right-6 top-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={assets.close_black}
                alt="close"
                className="w-5 dark:hidden"
              />
              <Image
                src={assets.close_white}
                alt="close"
                className="w-5 hidden dark:block"
              />
            </div>

            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                variants={menuItemVariant}
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  href={item.link}
                  className="inline-block font-ovo text-gray-800 dark:text-gray-100 
               hover:text-indigo-600 dark:hover:text-indigo-400 
               transition-transform duration-300 ease-in-out hover:scale-110 text-lg"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
