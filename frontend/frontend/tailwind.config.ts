import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        accent: {
          50: "#fdf2f2",
          100: "#fae1e1",
          200: "#f5c8c9",
          300: "#efa3a5",
          400: "#e47175",
          500: "#d6474e",
          600: "#c1313c",
          700: "#a22530",
          800: "#8b2635",
          900: "#752430",
          950: "#411016",
        },
      },
    },
  },
  plugins: [],
};

export default config;
