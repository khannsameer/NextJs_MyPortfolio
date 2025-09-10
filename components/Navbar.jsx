import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
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
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <Link href="#top" className="font-ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-ovo">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-ovo">
              Contact me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              priority={true}
              className="w-3"
              alt=""
            />
          </Link>

          <button className="block md:hidden ml-3">
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
