/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#0B0C0E",
      red: "#C40C0C",
      "dark-grey": "#3C3D3E",
      "light-grey": "#C7D0D9",
      "off-white": "#F4F7FA",
    },
    fontFamily: {
      "neue-montreal": ["pp neue montreal", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
}
