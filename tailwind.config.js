/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Mono"', 'monospace'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'thrust': 'thrust 0.5s ease-in-out',
        'flame': 'flame 1s ease-in-out infinite',
        'sideThrust': 'sideThrust 0.3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};


