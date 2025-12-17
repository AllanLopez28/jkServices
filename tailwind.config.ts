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
          primary: "#0057A4",        // azul principal (JK)
          primaryLight: "#E3F0FF",   // azul muy claro para fondos
          primaryDark: "#0B2D63",    // azul oscuro
          accent: "#00A0E3",         // celeste acento
          text: "#1F2933",           // texto principal
          muted: "#6B7280",          // texto secundario
          background: "#F5F7FB",     // gris muy claro de fondo
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
