import { Montserrat, Outfit, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],    // use consistent weights everywhere
  display: "swap",
});

export const montserrat = Montserrat({
    subsets:["latin"],
})

export const outfit = Outfit ({
    subsets:["latin"]
})