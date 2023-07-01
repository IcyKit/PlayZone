/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "button-bg": "#4574CF",
      "header-bg-dark": "#26282B",
      "button-dark": "#2C2C2C",
      "contrast-dark": "#3A3D40",
      "text-dark": "#CACCCF",
      "text-contrast-dark": "#9C9EA1",
      "main-bg-dark": "#161617",
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "dark-shadow": "0 2px 2px #3a3c3f",
      },
    },
  },
  plugins: [],
};
