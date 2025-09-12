import React from 'react'
import { Montserrat, Outfit, Playfair_Display } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import img from '@/Assets/gathering.png'
import flower from '@/Assets/flowerbg.png'

const playfair = Playfair_Display({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const HeroSection = () => {
    return (
        <section className="relative  w-full min-h-screen flex bg-white overflow-hidden">

            {/* Decorative Flower (Left Side) */}
            <div className="absolute left-0 top-0 h-full w-24 sm:w-28 md:w-32 lg:w-40 pointer-events-none z-0">
                <Image
                    src={flower}
                    alt="Flower decoration"
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            <div className="Mycontainer relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  gap-12">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start w-full md:w-1/2 gap-6 text-center md:text-left">
                    <p className={`font-medium text-gray-700 text-sm sm:text-base ${outfit.className}`}>
                        — Hello and Welcome,
                    </p>

                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight ${playfair.className}`}>
                        Create & Share Beautiful
                        <span className="text-[#824D5D]"> Invitations</span>
                    </h1>

                    <h3 className={`text-base w-[80%] lg:w-[80%] sm:text-lg lg:text-xl font-light mt-2 text-gray-600  ${outfit.className}`}>
                        Design stunning digital invites for weddings, birthdays & parties — no design skills needed.
                    </h3>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <button
                            className={`border-2 rounded-tl-3xl rounded-br-3xl px-6 py-3 font-bold tracking-wide flex items-center gap-4 bg-[#D1F0B1] ${montserrat.className} transition-transform duration-300 hover:scale-105`}
                            style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.90)' }}
                        >
                            Download App
                            <span className="text-xl md:text-2xl border px-3 py-1 rounded-tl-2xl rounded-br-2xl text-white bg-[#1A281F] flex items-center justify-center">
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Content (Hero Image) */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-[90%] sm:w-[70%] md:w-full h-[300px] sm:h-[380px] md:h-[450px] flex items-center justify-center">
                        <Image
                            src={img}
                            alt="Hero Image"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
