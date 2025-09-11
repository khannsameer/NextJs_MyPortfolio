import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <div
          className="
    w-full h-[400px] 
    bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 
    dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-black
    blur-3xl opacity-70
  "
        ></div>
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="#top">
          <Image
            src={assets.logo}
            priority={true}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white dark:bg-gray-900 shadow-sm bg-opacity-50 dark:bg-opacity-70">
          <li>
            <Link
              href="#top"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
            >
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              priority={true}
              className="w-3"
              alt=""
            />
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              priority={true}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* modile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen  transition duration-500 bg-gray-50 dark:bg-gray-900"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              priority={true}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link
              href="#top"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-ovo text-gray-800 dark:text-gray-100 hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
