import { screens } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      // smaller breakpoints should be added before the rest
      // placing them in "extend" would put them after
      xs: "540px",
      ...screens,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
      },
      colors: {
        "main-red": "#B31221",
      },
    },
  },
  plugins: [],
};
