/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "black": '#1C1C1C',
        "bgBlack": '#222222',
        "divLight": '#00000014',
        "divDark": '#ffffff14',
        "white05": '#ffffff0d',
        "white10": '#ffffff1a',
        "white15": '#ffffff26',
        "white20": '#ffffff33',
        "white30": '#ffffff4d',
        "white40": '#ffffff66',
        "black05": '#0000000d',
        "black10": '#0000001a',
        "black15": '#00000026',
        "black20": '#00000033',
        "black30": '#0000004d',
        "black40": '#00000066',
      }
    },
  },
  plugins: [],
}

