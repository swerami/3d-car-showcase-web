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
      },
      menuIn: {
        '0%': {  
          transform: 'translateX(-70%)', 
           opacity: '0' 
        },
        '100%': { 
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
    },
    animation: {
      'wiggle': 'wiggle 300ms ease-in-out',
      'menuIn': 'menuIn 500ms ease-in-out',
    },
  },
  },
  plugins: [],
}

