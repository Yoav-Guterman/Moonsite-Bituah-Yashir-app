/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code
    './app/**/*.{js,tsx,ts,jsx}', "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#172554',
        link: '#7e22ce',
        inactive: '#6b7280',
        error: '#B91C1C',
        disabled: '#4B5563',
      }
    },
  },
  plugins: [],
};