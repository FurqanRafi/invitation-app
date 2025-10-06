"use client";

import React from "react";
import Image from "next/image";
import { Outfit, Playfair_Display } from "next/font/google";
import { useAppContext } from "@/context/AppContext";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const About: React.FC = () => {
  const { about } = useAppContext();
  // Remove or guard console.log in production
  if (!about) return <p>No About Data Found</p>;

  return (
    <div
      id="about"
      className="w-full min-h-screen relative flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="w-full h-full py-10 absolute top-0 left-0 z-10 bg-gradient-to-r from-white to-pink-50 flex items-center justify-center pointer-events-none">
        <div className="absolute right-0 top-0 h-50 sm:h-60 md:h-70 lg:h-80 w-40 sm:w-60 md:w-70 lg:w-90 pointer-events-none z-0">
          <Image
            src={about.aboutimg}
            width={500}
            height={600}
            alt="Flower decoration"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="z-20 w-full flex flex-col lg:flex-row items-center justify-center pointer-events-none">
          <div className="md:w-full w-full Mycontainer lg:w-[30%] h-full flex flex-col items-center justify-center lg:pl-20">
            <div className="w-full bg-white flex flex-col items-start justify-center p-10 lg:p-20 sm:mb-10 shadow-2xl">
              <div className="flex flex-col items-start justify-center mb-4">
                <div className="icon">
                  <Image
                    src={about.upperimg}
                    alt="Popular Invitations"
                    width={500}
                    height={600}
                    className="rounded-2xl w-10 h-10 lg:w-12 lg:h-12"
                  />
                </div>
                <h1
                  className={`text-3xl lg:text-5xl font-bold ${playfair.className}`}
                >
                  <span className="text-[#824D5D]">{about.title}</span>
                </h1>
                <p
                  className={`text-medium leading-6 lg:leading-9 sm:leading-7 md:leading-8 mt-5 ${outfit.className}`}
                >
                  {about.description}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full z-7 md:-z-10">
            <div className="w-full h-full flex flex-row items-center justify-center">
              <Image
                src={about.img1}
                alt="Invitation 1"
                width={500}
                height={600}
                className="w-32 h-48 md:w-40 md:h-60 lg:w-100 lg:h-100 object-cover shadow-lg"
              />
              <Image
                src={about.img2}
                alt="Invitation 2"
                width={500}
                height={600}
                className="w-32 h-48 md:w-40 md:h-60 lg:w-65 lg:h-70 object-cover shadow-lg"
              />
              <Image
                src={about.img3}
                alt="Invitation 3"
                width={500}
                height={600}
                className="w-32 h-48 md:w-40 md:h-60 lg:w-55 lg:h-70 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
