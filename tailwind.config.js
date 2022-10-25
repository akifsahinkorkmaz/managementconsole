/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thpurp: "#6F6AF8",
        thlpurp: "#F2F2FD",
        thgreen: "#63D047",
        thlgreen: "#E2FBDA",
        thred: "#C73045",
        thlred: "#FFDADF",
        thwhite: "#FFFFFF",
        thbg: "#F8FAFB",
      }
    },
  },
  plugins: [],
}
