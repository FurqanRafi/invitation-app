'use client'

import React from 'react'
import Logo from '@/Assets/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // icons for mobile menu
import { useAppContext } from '@/context/appcontext';
// const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '#about', label: 'About Us' },
//     { href: '#services', label: 'Services' },
//     { href: '#Hero', label: 'Gallery' },
//     { href: '#cards', label: 'Contact' },
// ]

const Header = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = React.useState(false);
    

    const { navbar, loading } = useAppContext();
    console.log(navbar)

    if (loading) return <p>Loading...</p>;
    if (!navbar) return <p>No Navbar Data Found</p>;

    return (
        <header className="w-full bg-white">
            <div className="flex Mycontainer items-center justify-between max-w-7xl mx-auto h-20">

                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src={navbar.img}
                            alt="logo"
                            width={170}
                            height={170}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex">
                    <ul className="flex gap-8">
                        {navbar.navlinks.map(link => (
                            <li key={link.link}>
                                <Link
                                    className={`text-lg font-semibold uppercase transition-colors hover:text-[#824D5D] ${pathname === link.link
                                        ? 'text-[#824D5D] underline underline-offset-4'
                                        : 'text-[#1A281F]'
                                        }`}
                                    href={link.link}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center border-2 border-gray-700 px-5 py-2 ">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-1 py-1 font-bold text-xl uppercase border-b-4 text-[#1A281F] hover:text-[#824D5D] transition cursor-pointer"
                    >
                        Consult <FaArrowRightLong className="text-2xl" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Nav (Right Slide Full Screen) */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header inside menu */}
                <div className="flex justify-between items-center p-5 border-b">
                    <Image src={Logo} alt="logo" width={100} height={100} />
                    <button
                        className="text-3xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX />
                    </button>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-col items-center gap-8 py-12">
                    {navbar.navlinks.map(link => (
                        <li key={link.link}>
                            <Link
                                className={`text-xl font-semibold uppercase block hover:text-[#824D5D] ${pathname === link.link
                                    ? 'text-[#824D5D] underline underline-offset-4'
                                    : 'text-gray-700'
                                    }`}
                                href={link.link}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    {/* CTA Button */}
                    <a
                        href="#services"
                        className="flex items-center gap-3 px-6 py-2 font-bold text-lg uppercase border-b-4 border-[#824D5D] hover:text-[#824D5D] transition"
                    >
                        Consult <FaArrowRightLong className="text-2xl" />
                    </a>

                </ul>
            </div>
        </header >
    )
}

export default Header
