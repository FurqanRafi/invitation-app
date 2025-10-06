"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
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

/* ---------- context shape ---------- */
export interface AppContextType {
  navbar: NavbarData | null;
  hero: HeroData | null;
  about: AboutData | null;
  popular: PopularData | null;
  card: CardsData | null;
  footer: FooterData | null;
  heroLoading: boolean;
  loading: boolean;
}

/* ---------- default safe context ---------- */
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

export const AppContext = createContext<AppContextType>(defaultContext);

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

  // Helper to fetch data safely
  const safeFetch = async <T,>(url: string, setter: (data: T) => void) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url}`);
      const data = await res.json();
      setter(data[0]);
    } catch (err) {
      console.error(`❌ Fetch error for ${url}:`, err);
    }
  };

  // Fetch all APIs
  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API;
    if (!api) {
      console.error("❌ Missing NEXT_PUBLIC_API environment variable");
      setLoading(false);
      return;
    }

    Promise.all([
      safeFetch<NavbarData>(`${api}/navbar`, setNavbar),
      safeFetch<HeroData>(`${api}/hero`, setHero),
      safeFetch<AboutData>(`${api}/about`, setAbout),
      safeFetch<PopularData>(`${api}/popular`, setPopular),
      safeFetch<CardsData>(`${api}/card`, setCard),
      safeFetch<FooterData>(`${api}/footer`, setFooter),
    ])
      .catch((err) => console.error("Error fetching app data:", err))
      .finally(() => setLoading(false));
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

/* ---------- custom hook ---------- */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
