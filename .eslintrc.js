module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        'allow': [
          '_id'
        ],
        'allowAfterThis': false
      }
    ],

    // IMPORT
    'import/no-unresolved': 0,
  },
};
