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
      animation: {
        levitate: "levitate 4s ease-in-out infinite",
      },
      keyframes: {
        levitate: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
        },
      },
    },
  },
  plugins: [],
};
