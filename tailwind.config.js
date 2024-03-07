/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        buda: ['Buda', 'serif'],
      },
      colors: {
        'lightbg': '#D6DBD0',
        'darkbg': '#2B2430',
        'lighttext': '#D6DBD0',
        'darktext': '#101010',
        'blazedgreen': '#025E50',
        'blazedpink': '#FF9591',
        },
    },
  },
  plugins: [],
};