"use client"

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
} from "react";

/* ---------- types ---------- */
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
  name: string;
  link: string;
}

export interface Service {
  _id: string;
  name: string;
  link: string;
}

export interface Location {
  address: string;
  mapEmbedUrl: string;
}

export interface FooterData {
  _id?: string;
  logo: string;
  description: string;
  socaillinks: SocialLink[];
  navlinks: MenuItem[];
  quicklinks: Service[];
  address: string;
  copyright: string;
}

/* ---------- context shape (no `any`) ---------- */
export type AppContextType = {
  navbar: NavbarData | null;
  hero: HeroData | null;
  about: AboutData | null;
  popular: PopularData | null;
  card: CardsData | null;
  footer: FooterData | null;
  heroLoading: boolean;
  loading: boolean;
};

const defaultContext: AppContextType = {
  navbar: null,
  hero: null,
  about: null,
  popular: null,
  card: null,
  footer: null,
  heroLoading: false,
  loading: true,
};

const AppContext = createContext<AppContextType>(defaultContext);

/* ---------- provider ---------- */
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [navbar, setNavbar] = useState<NavbarData | null>(null);
  const [hero, setHero] = useState<HeroData | null>(null);
  const [about, setAbout] = useState<AboutData | null>(null);
  const [popular, setPopular] = useState<PopularData | null>(null);
  const [card, setCard] = useState<CardsData | null>(null);
  const [footer, setFooter] = useState<FooterData | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [heroLoading, setHeroLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/navbar`); // 👈 tumhara backend API
        const data = await res.json();
        setNavbar(data[0]);
      } catch (err) {
        console.error("Error fetching navbar:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/hero`);
        const data = await res.json();
        console.log(data, "hero");
        setHero(data[0]);
      } catch (err) {
        console.error("Error fetching herosection:", err);
      } finally {
        setHeroLoading(false);
      }
    };
    fetchHeroSection();
  }, []);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/about`);
        const data = await res.json();
        console.log(data, "about");
        setAbout(data[0]);
      } catch (err) {
        console.error("Error fetching About Us:", err);
      }
    };
    fetchAbout();
  }, []);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/popular`);
        const data = await res.json();
        console.log(data, "popular");
        setPopular(data[0]);
      } catch (err) {
        console.error("Error fetching Popular Data ", err);
      }
    };
    fetchPopular();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/card`);
        const data = await res.json();
        console.log(data, "cards");
        setCard(data[0]);
      } catch (err) {
        console.error("Error by fetching the Cards Data", err);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/footer`);
        const data = await res.json();
        console.log(data, "footer");
        setFooter(data[0]);
      } catch (err) {
        console.error("Error by Fetching the Footer Data", err);
      }
    };
    fetchFooter();
  }, []);

  return (
    <AppContext.Provider
      value={{
        navbar,
        hero,
        about,
        popular,
        card,
        footer,
        loading,
        heroLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useAppContext = () => useContext(AppContext);
