"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";

export type NavLink = { _id: string; name: string; link: string };
export type NavbarData = {
  logo: string;
  navlinks: NavLink[];
  btntext: string;
  btnlink: string;
};
export type HeroData = {
  _id: string;
  title: string;
  heading: string;
  description: string;
  btntext: string;
  btnlink: string;
  heroimg: string;
  sideimg: string;
};
export type AboutData = {
  _id: string;
  aboutimg: string;
  upperimg: string;
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
};
export type PopularData = {
  _id: string;
  title: string;
  description: string;
  topimg: string;
};
export type CardsData = {
  _id: string;
  length: number;
  Cardimg1: string;
  Cardimg2: string;
  Cardimg3: string;
  Cardimg4: string;
};
export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}
export interface MenuItem {
  _id: string;
  names: string;
  links: string;
}
export interface Service {
  _id: string;
  name: string;
  link: string;
}
export interface FooterData {
  _id?: string;
  logo: string;
  mapEmbedUrl: string;
  description: string;
  socaillinks: SocialLink[];
  navlinks: MenuItem[];
  quicklinks: Service[];
  address: string;
  copyright: string;
}

export type AppContextType = {
  navbar: NavbarData | null;
  hero: HeroData | null;
  about: AboutData | null;
  popular: PopularData | null;
  card: CardsData | null;
  footer: FooterData | null;
  loading: boolean;
};

const defaultContext: AppContextType = {
  navbar: null,
  hero: null,
  about: null,
  popular: null,
  card: null,
  footer: null,
  loading: true,
};

const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbar, setNavbar] = useState<NavbarData | null>(null);
  const [hero, setHero] = useState<HeroData | null>(null);
  const [about, setAbout] = useState<AboutData | null>(null);
  const [popular, setPopular] = useState<PopularData | null>(null);
  const [card, setCard] = useState<CardsData | null>(null);
  const [footer, setFooter] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [navbarRes, heroRes, aboutRes, popularRes, cardRes, footerRes] =
          await Promise.all([
            fetch("https://new-backend-invitation.vercel.app/api/navbar"),
            fetch("https://new-backend-invitation.vercel.app/api/hero"),
            fetch("https://new-backend-invitation.vercel.app/api/about"),
            fetch("https://new-backend-invitation.vercel.app/api/popular"),
            fetch("https://new-backend-invitation.vercel.app/api/card"),
            fetch("https://new-backend-invitation.vercel.app/api/footer"),
          ]);

        const [
          navbarData,
          heroData,
          aboutData,
          popularData,
          cardData,
          footerData,
        ] = await Promise.all([
          navbarRes.json(),
          heroRes.json(),
          aboutRes.json(),
          popularRes.json(),
          cardRes.json(),
          footerRes.json(),
        ]);

        setNavbar(navbarData[0]);
        setHero(heroData[0]);
        setAbout(aboutData[0]);
        setPopular(popularData[0]);
        setCard(cardData[0]);
        setFooter(footerData[0]);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Show loader until all data is loaded
  if (loading) {
    return <Loader />;
  }

  return (
    <AppContext.Provider
      value={{ navbar, hero, about, popular, card, footer, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
