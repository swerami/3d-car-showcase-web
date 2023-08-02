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
      stretch500: {
        '0%': {  
          transform: 'scaleY(100%)' 
        },
        '50%': { 
          transform: 'scaleY(20%)',
        },
        '100%': { 
          transform: 'scaleY(100%)',
        },
      },
      stretch1000: {
        '0%': {  
          transform: 'scaleY(100%)' 
        },
        '50%': { 
          transform: 'scaleY(20%)',
        },
        '100%': { 
          transform: 'scaleY(100%)',
        },
      },
      stretch1500: {
        '0%': {  
          transform: 'scaleY(100%)' 
        },
        '50%': { 
          transform: 'scaleY(20%)',
        },
        '100%': { 
          transform: 'scaleY(100%)',
        },
      },
    },
    animation: {
      'wiggle': 'wiggle 300ms ease-in-out',
      'menuIn': 'menuIn 500ms ease-in-out',
      'stretch-500': 'stretch500 800ms ease-in-out infinite',
      'stretch-1000': 'stretch1000 1500ms ease-in-out infinite',
      'stretch-1500': 'stretch1500 2000ms ease-in-out infinite',
    },
  },
  },
  plugins: [],
}

