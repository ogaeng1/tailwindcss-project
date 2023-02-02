/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-spinner": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
