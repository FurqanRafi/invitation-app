// src/components/Footer/Footer.tsx
"use client";

import React, { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

import { Montserrat, Outfit, Playfair_Display } from "next/font/google";
import {
  useAppContext,
  FooterData,
  SocialLink,
  MenuItem,
  Service,
} from "@/context/AppContext";

const playfair = Playfair_Display({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Footer: React.FC = (): JSX.Element | null => {
  const { footer } = useAppContext();

  // Render nothing (or a skeleton) while footer data is not available
  if (!footer) return null;

  return (
    <footer className="w-full Mycontainer mt-30">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <div className="mb-4">
            {/* Next/Image requires valid width/height or fill layout */}
            <Image
              src={footer.logo}
              alt="Logo"
              width={250}
              height={250}
              className="mx-auto md:mx-0"
            />
          </div>

          <p
            className={`text-gray-600 text-sm lg:text-lg leading-relaxed mb-4 ${outfit.className}`}
          >
            {footer.description}
          </p>

          <div className="flex justify-center md:justify-start gap-3">
            <div className="flex space-x-7 mt-3">
              {footer?.socaillinks?.map((link: SocialLink) => (
                <a
                  key={link?.url}
                  href={link?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl flex items-center justify-center"
                >
                  {/* Image needs width/height for optimization */}
                  <Image
                    src={link?.icon}
                    alt={link?.platform || 'image'}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="w-full flex items-start justify-between text-start md:text-left mt-10">
          <div className="lg:ml-10 ml-0">
            <h2
              className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}
            >
              Menu
            </h2>

            <ul
              className={`space-y-3 text-lg cursor-pointer lg:text-xl font-medium flex flex-col gap-2 text-[#3F3F3F] ${outfit.className}`}
            >
              {footer?.navlinks?.map((item: MenuItem) => (
                <li key={item._id}>
                  {/* Use next/link for internal navigation */}
                  <Link href={item.links} className="hover:text-[#824D5D]">
                    {item.names}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2
              className={`${playfair.className} font-semibold text-2xl lg:text-2xl mb-6`}
            >
              Services
            </h2>

            <ul
              className={`${outfit.className} space-y-3 text-lg cursor-pointer text-[#3F3F3F] flex flex-col gap-2 lg:text-xl font-medium`}
            >
              {footer?.quicklinks?.map((service: Service) => (
                <li key={service._id}>
                  <Link href={service.link} className="hover:text-[#824D5D]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <h2
            className={`${playfair.className} font-semibold text-lg lg:text-2xl mb-6`}
          >
            Location
          </h2>
          <div className="rounded-cl overflow-hidden shadow">
            {/* footer.address is an object (Location). Use its mapEmbedUrl string */}
            <iframe
              src={footer?.mapEmbedUrl}
              width="100%"
              height="250"
              title="Google Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className={`${montserrat.className} mt-10 border-t border-gray-200 py-6 text-center font-extrabold text-sm lg:text-xl lg:text-start text-gray-700`}
      >
        &copy; {footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
