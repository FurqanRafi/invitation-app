import React from 'react'
import Image from 'next/image'
import Flower from '@/Assets/flowrbg.png'
import floral from '@/Assets/designflower.png'
import img1 from '@/Assets/wedding12.png'
import img2 from '@/Assets/wedding7.png'
import img3 from '@/Assets/wedding11.png'
import { Outfit, Playfair_Display } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });
const Playfair = Playfair_Display({ subsets: ['latin'] });

const about = () => {
    return (
        <div className="w-full min-h-screen relative flex items-center justify-center bg-white overflow-hidden">
            <div className='w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-r from-white to-pink-50 flex items-center justify-center pointer-events-none'>
                <div className='absolute right-0 top-0 h-50 sm:h-60 md:h-70 lg:h-80 w-40 sm:w-60 md:w-70 lg:w-90 pointer-events-none z-0'>
                    <Image src={Flower} alt="Flower decoration" className='w-full h-full object-cover' priority />
                </div>
                <div className='z-20 w-full flex flex-col lg:flex-row items-center justify-center pointer-events-none'>
                    <div className=' md:w-full w-full Mycontainer lg:w-[30%] h-full flex flex-col items-center justify-center lg:pl-20 '>
                        <div className='w-full bg-white flex flex-col items-start justify-center p-10 lg:p-20 sm:mb-10  shadow-2xl'>
                            <div className='flex flex-col  items-start justify-center mb-4'>
                                <div className="icon ">
                                    <Image src={floral} alt="Popular Invitations" className="rounded-2xl w-10 h-10 lg:w-12 lg:h-12" />
                                </div>
                                <h1 className={` text-3xl lg:text-5xl font-bold ${Playfair.className}`}>
                                    <span className="text-[#824D5D]">About</span> Us
                                </h1>
                                <p className={`text-medium  mt-5 text-justify ${outfit.className}`}>
                                    At [App Name], we believe that every celebration deserves a beautiful beginning.
                                    Our mission is to make invitations simple, stylish, and stress-free.
                                    Whether it’s a wedding, birthday, or corporate event, we help you design digital invites
                                    that reflect your personality — all in just a few minutes.
                                    <br />
                                    With ready-made templates, easy customization, and instant sharing options,
                                    our app turns your special moments into unforgettable memories.
                                </p>
                            </div>
                        </div>
                        <div></div>

                    </div>
                    <div className='w-full h-full z-7 md:-z-10 '>
                        <div className='w-full h-full flex flex-row items-center justify-center '>
                            <Image src={img1} alt="Invitation 1" className='w-32 h-48 md:w-40 md:h-60  lg:w-100 lg:h-100 object-cover  shadow-lg ' />
                            <Image src={img2} alt="Invitation 2" className='w-32 h-48 md:w-40 md:h-60 lg:w-65 lg:h-70 object-cover  shadow-lg ' />
                            <Image src={img3} alt="Invitation 3" className='w-32 h-48 md:w-40 md:h-60 lg:w-55 lg:h-70 object-cover  shadow-lg ' />
                        </div>
                    </div>
                </div>


            </div>




        </div >
    )
}

export default about
