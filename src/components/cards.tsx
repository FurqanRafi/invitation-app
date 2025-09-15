import React from 'react'
import Image from 'next/image'
import card1 from '@/Assets/card1.png'
import card2 from '@/Assets/card2.png'
import card3 from '@/Assets/card3.png'
import card4 from '@/Assets/card4.png'

const images = [card1, card2, card3, card4]

const Cards = () => {
    return (
        <div className="w-full mb-20 ">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src={img}
                            alt={`card ${idx + 1}`}
                            className="w-full h-full object-cover"
                            width={400}
                            height={500}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
