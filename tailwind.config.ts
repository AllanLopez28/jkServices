import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#125bfa",
          primaryLight: "#edf2fc",
          primaryDark: "#10234b",
          accent: "#00A0E3",         // celeste acento
          text: "#10234b",
          muted: "#566584",
          background: "#edf2fc",
          surface: "#FFFFFF"         // blanco para tarjetas
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
