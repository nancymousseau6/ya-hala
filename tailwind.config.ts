import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yahaha-green": "#007A3D",
        "yahaha-red": "#CE1126",
        "yahaha-gold": "#FFD700",
        "cedar-green": "#007A3D",
        "cedar-dark": "#005a2d",
        "cedar-light": "#f0faf4",
        "leb-red": "#CE1126",
        "warm-cream": "#fdfaf4",
        "warm-gold": "#b8972a",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;