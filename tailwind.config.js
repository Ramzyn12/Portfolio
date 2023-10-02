/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        homeTitle: ["Archivo Black", "sans-serif"],
        detailWords: ["Source Code Pro", "monospace"],
      },
      screens: {
        xs: "475px",
        xxs: "400px", // You can define your custom value here
      },
    },
  },
  plugins: [],
};
