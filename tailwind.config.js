/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // Adjust the path to the `pages` directory under `src`
    "./src/components/**/*.{js,ts,jsx,tsx}",  // Adjust the path to the `components` directory under `src`
    "./src/app/**/*.{js,ts,jsx,tsx}",         // Adjust the path to the `app` directory under `src` (if you're using it)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
