"use client";
import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Floating fading logo */}
      <div className="mb-20 animate-[fadeMove_3s_ease-in-out_infinite]">
        <Image
          src="/LogobgRemove.png"
          alt="Brand Logo"
          width={300}
          height={300}
          className="opacity-95 drop-shadow-[0_8px_30px_rgba(239,68,68,0.3)]"
        />
      </div>

      {/* Loader */}
      <div className="relative flex items-center justify-center scale-110">
        {/* Soft radiant glow base */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-red-300/10 via-red-400/25 to-transparent blur-3xl animate-pulse"></div>

        {/* Elegant outer ring */}
        <div className="absolute w-32 h-32 border-[1.5px] border-red-400/50 rounded-full animate-[spin_4s_linear_infinite]"></div>

        {/* Stylish reverse inner ring */}
        <div className="absolute w-24 h-24 border-[2px] border-t-red-600 border-b-transparent rounded-full animate-[spin_2.5s_linear_infinite_reverse]"></div>

        {/* Moving glowing arc */}
        <div className="absolute w-18 h-18 border-[3px] border-transparent border-t-red-500 border-r-red-400 rounded-full animate-[spin_1.8s_linear_infinite] blur-[0.5px]"></div>

        {/* Center pearl glow */}
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_35px_12px_rgba(239,68,68,0.55)] animate-pulse"></div>

        {/* Subtle shimmer orbit */}
        <div className="absolute w-28 h-28 rounded-full bg-gradient-to-t from-red-200/15 to-transparent blur-md animate-[spin_6s_linear_infinite] opacity-60"></div>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes fadeMove {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes spin_reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
