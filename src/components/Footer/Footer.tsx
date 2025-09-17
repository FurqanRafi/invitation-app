'use server'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/Assets/Logo bgRemove.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, } from "react-icons/fa";
import { Montserrat, Outfit, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });


const Footer = () => {
    return (
        <footer className="w-full Mycontainer mt-30 ">
            <div className="  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">

                {/* Logo & Description */}
                <div className="text-center md:text-left  ">
                    <div className="mb-4">
                        <Image src={Logo} alt="Logo" width={250} height={250} className="mx-auto md:mx-0" />
                    </div>
                    <p className={`text-gray-600 text-sm lg:text-lg leading-relaxed mb-4 ${outfit.className}`}>
                        [App Name] makes it easy to design, customize, and share beautiful digital invitations
                        for weddings, birthdays, parties, and every special event — anytime, anywhere.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3">
                        {/* Replace with real icons */}
                        <div className="flex space-x-7 mt-3">
                            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube,].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-3xl flex items-center justify-center "
                                >
                                    <Icon className="cursor-pointer" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className='w-full flex items-start justify-between text-start md:text-left mt-10 '>
                    <div className='lg:ml-10 ml-0'>
                        <h2 className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}>Menu</h2>
                        <ul className={`space-y-3 text-lg lg:text-xl font-medium flex  flex-col gap-2 text-[#3F3F3F] ${outfit.className}`}>
                            <li><Link href="/" className="hover:text-[#824D5D]">Home</Link></li>
                            <li><Link href="#about" className="hover:text-[#824D5D]">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-[#824D5D]">Services</Link></li>
                            <li><Link href="#Hero" className="hover:text-[#824D5D]">Gallery</Link></li>
                            <li><Link href="#cards" className="hover:text-[#824D5D]">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}>Services</h2>
                        <ul className={`${outfit.className} space-y-3 text-lg text-[#3F3F3F] flex flex-col gap-2 lg:text-xl font-medium`}>
                            <li>
                                <Link href="#" className="hover:text-[#824D5D]">
                                    Wedding Invitation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#824D5D]">
                                    Birthday Invitation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#824D5D]">
                                    Party Invitation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className='mt-10'>
                    <h2 className={`${playfair.className} font-semibold text-lg lg:text-2xl mb-6`}>Location</h2>
                    <div className="rounded-lg overflow-hidden shadow ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234567890!2d-122.419415484681!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f8e4b1b%3A0x4a0b0b0b0b0b0b0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1694094094094!5m2!1sen!2sus"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className={` ${outfit.className} mt-10 border-t border-gray-200 py-6 text-center font-bold text-sm lg:text-xl lg:text-start text-gray-700`}>
                Copyright © {new Date().getFullYear()}  , All Right Reserved.
            </div>
        </footer>
    )
}

export default Footer
