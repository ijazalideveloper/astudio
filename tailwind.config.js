/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#322625',
        'custom-grey': '#ebebeb',
        'custom-blue': '#c0e3e5',
        'custom-yellow': '#fdc936',
      },
      fontFamily: {
        neutra: ['Neutra Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};