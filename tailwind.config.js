module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#322625",
        grey: "#ebebeb",
        blue: "#c0e3e5",
        yellow: "#fdc936",
      },
      fontFamily: {
        neutra: ["Neutra Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
