/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
      },
      colors: {
        "main-red": "#B31221",
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
