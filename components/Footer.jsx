import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      {/* Logo & Email */}
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          sameerkhanjsr26@gmail.com
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-4 border-t border-gray-300 dark:border-gray-700 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Sameer. All rights reserved.
          </p>

          {/* Social Icons */}
          <ul className="flex items-center gap-6 mt-4 md:mt-0 justify-end">
            <li>
              <Link
                href="https://github.com/khannsameer"
                target="_blank"
                className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors text-2xl"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/sameer-khan0008/"
                target="_blank"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors text-2xl"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/yourprofile"
                target="_blank"
                className="text-gray-700 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400 transition-colors text-2xl"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/yourprofile"
                target="_blank"
                className="text-gray-700 hover:text-pink-500 dark:text-gray-200 dark:hover:text-pink-400 transition-colors text-2xl"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
