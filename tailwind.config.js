/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkYellow' : '#FDA214',
        'lightGray' : '#BCCED9',
        'darkGray' : '#304859',
        'darkBlack' : '#152938', 
        'white2' : '#F2F2F2',
        'white3' : '#FCFCFC',
        'lightBlue' : '#7191A5',
        'lightBlue2' : '#6395DB'
      },
      fontFamily: {
        'athl' : ["Atkinson Hyperlegible", "sans-serif"]
      },
      screens: {
        'xs' : '320px',
        'smh' : '400px'
      },
      fontSize: {
        'xxs' : '.5rem'
      },
      width: {
        '45%': '45%',
        '32%': '32%'
      },
    },
  },
  plugins: [],
}

