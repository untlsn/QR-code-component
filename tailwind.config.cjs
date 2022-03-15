module.exports = {
  extract: {
    include: ['**/*.{vue,css}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        greyishBlue: '#D5E1EF',
        deep: '#2B7DFA',
        lightDeep: '#3685FE',
        text: '#273550',
      },
    },
  },
};
