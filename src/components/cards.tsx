import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Cards = () => {
  const { card } = useAppContext();

  // ✅ agar cards null/undefined hai to safe rendering karo
  if (!card || card.length === 0) {
    return (
      <div id="cards" className="w-full mb-10 lg:mb-20 mt-5 text-center">
        <p>No cards available</p>
      </div>
    );
  }

  const array = [
    card?.Cardimg1,
    card?.Cardimg2,
    card?.Cardimg3,
    card?.Cardimg4,
  ];

  return (
    <div id="cards" className="w-full mb-10 lg:mb-20 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {array.map((card, idx) => (
          <div
            key={idx}
            className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              // ✅ yahan _id ko src mat banao, _id to string hai (MongoDB id)
              // aapko card.cardsimg1 (ya jo bhi image field hai) use karna hoga
              src={card}
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
  );
};

export default Cards;
