/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D00A6",
        sec: "#0A64BC",
        ter: "#0057ff",
        for: "#1769ff",
      },
      fontFamily: {
        "Nrj-fonts": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
