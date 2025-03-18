import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#E02424",
        white: "#ffffff",
        black: "#000000",
        yellow: "#FACA15",
        yellowbrown: "#3a391f",
        purple: "#9061F9",
        green: "#0E9F6E",
        gray: "#9CA3AF",
        darkblue: "#2a3860",
        darkblue2: "#202637",
        skyblue: "#2876b5",
      },
    },
  },
  plugins: [],
};
export default config;
