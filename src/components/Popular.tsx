import React from 'react'
import Image from 'next/image'
import Cards from './cards';
import floral from '@/Assets/floraldesign.png'
import { Montserrat, Outfit, Playfair_Display } from 'next/font/google';

const Playfair = Playfair_Display({ subsets: ['latin'] });

const Popular = () => {
    return (
        <div className='Mycontainer max-w-7xl mx-auto flex flex-col items-center '>
            <div className=' gap-4 mt-20 flex flex-col items-center lg:items-start'>
                <Image src={floral} alt="Popular Invitations" width={50} height={50} className='rounded-2xl sm:text-center ' />
                <div className='text-center'><h1 className={`lg:text-5xl ${Playfair.className} text-[#824D5D] font-bold w-full  text-4xl `}>POPULAR INVITATIONS</h1></div>

            </div>
            <div className='lg:w-[57%] w-full text-center m-7 '>
                <p className='text-xl text-[#3F3F3F] '>Design elegant wedding invitations in minutes — personalize, share, and make your big day unforgettable.</p></div>
            <Cards />
        </div>
    )
}

export default Popular
