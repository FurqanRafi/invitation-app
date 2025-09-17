"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

// 🔹 Types define karna (acha practice hai)
type NavLink = {
  name: string;
  link: string;
};

type NavbarData = {
  img: string;
  navlinks: NavLink[];
};

type AppContextType = {
  navbar: NavbarData | null;
  loading: boolean;
};

// Context create
const AppContext = createContext<AppContextType | null>(null);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [navbar, setNavbar] = useState<NavbarData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch("http://localhost:3001/navbar") // 👈 tumhara backend API
        const data = await res.json();
        setNavbar(data);
      } catch (err) {
        console.error("Error fetching navbar:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  return (
    <AppContext.Provider value={{ navbar, loading }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};
