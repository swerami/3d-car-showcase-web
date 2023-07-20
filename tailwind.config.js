/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      transitionProperty: {
      'width': 'width',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.95)' },
      }
    },
    animation: {
      'wiggle': 'wiggle 300ms ease-in-out',
    },
  },
  },
  plugins: [],
}

