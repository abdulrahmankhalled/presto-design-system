/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#004B8D",
          dark: "#2D383F",
        },
        green: {
          light: "#00805A",
          primary: "#00573D",
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
