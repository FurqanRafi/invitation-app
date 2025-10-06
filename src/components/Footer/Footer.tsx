"use client";
import React from "react";

import { Montserrat, Outfit, Playfair_Display } from "next/font/google";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Footer = () => {
  const { footer } = useAppContext();
  console.log(footer);
  if (!footer) return <p>Footer Data is not Found</p>;
  return (
    <footer className="w-full Mycontainer mt-30 ">
      <div className="  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {/* Logo & Description */}
        <div className="text-center md:text-left  ">
          <div className="mb-4">
            <Image
              src={footer?.logo}
              alt="Logo"
              width={250}
              height={250}
              className="mx-auto md:mx-0"
            />
          </div>
          <p
            className={`text-gray-600 text-sm lg:text-lg leading-relaxed mb-4 ${outfit.className}`}
          >
            {footer.description}
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            {/* Replace with real icons */}
            <div className="flex space-x-7 mt-3">
              {footer?.socaillinks?.map((link: any, i: any) => (
                <a
                  key={i}
                  target="_blank"
                  href={link.url}
                  className="text-3xl flex items-center justify-center "
                >
                  <Image
                    src={link.icon}
                    alt={link.plateform}
                    className="h-8 w-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="w-full flex items-start justify-between text-start md:text-left mt-10 ">
          <div className="lg:ml-10 ml-0">
            <h2
              className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}
            >
              Menu
            </h2>
            <ul
              className={`space-y-3 text-lg cursor-pointer lg:text-xl font-medium flex flex-col gap-2 text-[#3F3F3F] ${outfit.className}`}
            >
              {footer?.navlinks?.map((item: any, index: any) => (
                <li key={index}>
                  <a href={item.links} className="hover:text-[#824D5D]">
                    {item.names}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2
              className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}
            >
              Services
            </h2>
            <ul
              className={`${outfit.className} space-y-3 text-lg cursor-pointer text-[#3F3F3F] flex flex-col gap-2 lg:text-xl font-medium`}
            >
              {footer?.quicklinks?.map((service: any, index: any) => (
                <li key={index}>
                  <a href={service.link} className="hover:text-[#824D5D]">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <h2
            className={`${playfair.className} font-semibold text-lg lg:text-2xl mb-6`}
          >
            Location
          </h2>
          <div className="rounded-cl overflow-hidden shadow ">
            <iframe
              src={footer?.address}
              width="100%"
              height="250"
              title="Google Map"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className={` ${outfit.className} mt-10 border-t border-gray-200 py-6 text-center font-extrabold text-sm lg:text-xl lg:text-start text-gray-700`}
      >
        Copyright &copy;{footer?.copyright}
      </div>
    </footer>
  );
};

export default Footer;
