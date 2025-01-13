/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",        // Ensure this path is correct if you have a pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}",   // If your components are in 'portfolio/app/components'
    "./app/**/*.{js,ts,jsx,tsx,mdx}",           // For everything inside the 'app' directory
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
};
