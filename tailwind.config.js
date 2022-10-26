/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.17)'
      }
    }
  },
  plugins: ['flowbite/plugin']
};
