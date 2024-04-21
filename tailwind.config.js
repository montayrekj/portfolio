/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#0bc3fd",
        darkblue: "#0b65c3",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
