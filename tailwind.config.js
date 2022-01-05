// const defaulttheme = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: {
  content: ['./src/**/*.html'],
  // },\
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'color-one': '#1A0859',
        'color-two': '#4218D9',
        'color-three': '#3A15BF',
        'color-four': '#F21905',
        'color-five': '#0D0D0D',
      },
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        // lora: ['Lora', 'serif', ...defaulttheme.fontFamily.lora],
      },
      // flexGrow: {
      //   2: '2',
      //   3: '3',
      // },
      // spacing: {
      //   '128': '32rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
  },
  plugins: [],
};
