"use client";

import React from "react";
import Cards from "./cards";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";
import { playfair } from "@/llib/fonts";

const Popular = () => {
  const { popular } = useAppContext();
  console.log(popular);

  if (!popular) return <p>No Popular Data Found</p>;

  return (
    <div
      id="services"
      className="Mycontainer max-w-7xl mx-auto flex flex-col items-center "
    >
      <div className=" gap-4 mt-10 flex flex-col items-center lg:items-start ">
        <Image
          src={popular?.topimg}
          alt="Popular Invitations"
          width={50}
          height={50}
          className="rounded-2xl sm:text-center "
        />
        <div className="text-center">
          <h1
            className={`lg:text-5xl ${playfair.className}  text-[#824D5D] font-bold w-full  text-4xl `}
          >
            {popular?.title}
          </h1>
        </div>
      </div>
      <div className="lg:w-[57%] w-full text-center m-7 ">
        <p className="text-xl text-[#3F3F3F] ">{popular?.description}</p>
      </div>
      <Cards />
    </div>
  );
};

export default Popular;
