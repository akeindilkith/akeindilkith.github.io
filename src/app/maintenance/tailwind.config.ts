/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'ball-screen-move': 'ball-bounce 25s linear infinite',
      },
      keyframes: {
        'ball-bounce': {
          '0%': { top: '0%', left: '0%', transform: 'translate(-50%, -50%)' },
          '20%': { top: '20%', left: '80%', transform: 'translate(-50%, -50%)' },
          '40%': { top: '80%', left: '100%', transform: 'translate(-50%, -50%)' },
          '60%': { top: '100%', left: '20%', transform: 'translate(-50%, -50%)' },
          '80%': { top: '40%', left: '0%', transform: 'translate(-50%, -50%)' },
          '100%': { top: '0%', left: '0%', transform: 'translate(-50%, -50%)' },
        }
      }
    },
  },
  plugins: [],
}
