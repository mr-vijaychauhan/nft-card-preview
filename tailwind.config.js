/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      'soft-blue' : 'hsl(215, 51%, 70%)',
      'cyan' : 'hsl(178, 100%, 50%)',
      'main' : 'hsl(217, 54%, 11%)',
      'card' : 'hsl(216, 50%, 16%)',
      'line' : 'hsl(215, 32%, 27%)',
     }
    },
    screens:{
      'lg' : "1440px",
      'sm' : "375px"
    },
  },
  plugins: [],
};
