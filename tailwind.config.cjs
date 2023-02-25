/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "530px" }, // Small screen
    },
    extend: {
      fontFamily: {
        shantell: ["Shantell Sans", "cursive"],
      },
      colors: {
        yellow: {
          DEFAULT: "#e2c044",
          light: "#f0dfa1",
          dark: "#6e5a11",
        },
        blue: {
          DEFAULT: "#11151c",
        },
        white: {
          DEFAULT: "#fff",
          light: "#f3f3f3",
        },
        black: {
          DEFAULT: "#000",
        },
      },
    },
  },
  plugins: [],
};
