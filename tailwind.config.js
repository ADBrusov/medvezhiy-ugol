import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layouts/**/*.html",
    "./src/pages/**/*.html",
    "./src/components/**/*.html",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      cormorant: ["Cormorant", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "green-800": "#1A5632",
        "green-700": "#0F3A21",
        "green-300": "#C9E4D2",
      },
    },
  },
  plugins: [],
};
