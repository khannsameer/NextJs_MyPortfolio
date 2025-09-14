import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-xl font-ovo">Projects</h4>
      <h2 className="text-center text-5xl font-ovo">My Works</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 mb-12 font-ovo">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map(
          ({ name, description, tags, image, source_code_link }, index) => (
            <div
              key={index}
              className="group border border-gray-400 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer
          transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
        "
            >
              <Image
                src={image}
                alt={name}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 font-ovo">
                {name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-ovo">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-ovo">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full font-medium leading-tight
                ${
                  tag.color === "blue-text-gradient"
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200"
                    : tag.color === "green-text-gradient"
                    ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200"
                    : tag.color === "pink-text-gradient"
                    ? "bg-pink-100 text-pink-600 dark:bg-pink-800 dark:text-pink-200"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <Link
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline font-ovo"
              >
                View Source →
              </Link>
            </div>
          )
        )}
      </div>

      <Link
        href=""
        className="w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auto my-20 text-gray-700 border border-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-white dark:hover:text-black"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </Link>
    </div>
  );
};

export default Work;
