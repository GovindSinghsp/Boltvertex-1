/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vm-dark': '#061E29',
        'vm-primary': '#1D546D',
        'vm-accent': '#5F9598',
        'vm-soft': '#B8CFCE',
        'vm-bg-light': '#EAEFEF',
        'vm-bg-white': '#F3F4F4',
      },
      fontFamily: {
        'smooch': ['Smooch Sans', 'sans-serif'],
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
    },
  },
  plugins: [],
};