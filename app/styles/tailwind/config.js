const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
      indigo: colors.indigo,
    },
    extend: {},
  },
  plugins: [],
};
