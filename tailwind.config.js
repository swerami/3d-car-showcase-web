/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      transitionProperty: {
      'width': 'width',
    },},
  },
  plugins: [],
}

