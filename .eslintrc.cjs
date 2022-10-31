module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  plugins: ['react'],
  globals: {
    Atomics: 'readonly'
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
