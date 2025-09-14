import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-xl font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.prof} alt="user" className="w-full rounded-3xl" />
        </div>

        <div className="flex-1">
          <p className="max-w-3xl mb-10 font-ovo">
            I’m Sameer Khan, a passionate Full Stack Developer who enjoys
            building modern, responsive, and scalable web applications. I
            specialize in frontend technologies like React.js and Next.js, and
            backend development with Node.js, Express.js, and MongoDB. I love
            turning ideas into user-friendly digital solutions while
            continuously learning and exploring new technologies.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className=" group border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-8 cursor-pointer
               transition-all duration-300 ease-out transform hover:-translate-y-2 active:scale-95 hover:shadow-lg dark:hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-800"
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
              </li>
            ))}
          </ul>
          <h4 className="my-6 font-ovo">Tools I use</h4>
          <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className=" flex items-center justify-center w-14 sm:w-14 aspect-square p-3 border border-gray-400 rounded-lg bg-white dark:bg-gray-900 cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                <Image src={tool} alt="Tools" className="w-10 sm:w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
