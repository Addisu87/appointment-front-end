/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  },
  plugins: [require('flowbite/plugin')],
};
