module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: false },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: false, minProperties: 3 },
      },
    ],
  },
};
