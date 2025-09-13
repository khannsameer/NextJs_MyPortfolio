import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-xl font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 mb-12 font-ovo">
        I specialize in building modern, responsive, and scalable web
        applications. From frontend design to backend development, I create
        seamless digital experiences tailored to your needs.
      </p>

      <div className="grid grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index}>
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more <Image src={assets.right_arrow} className="w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
