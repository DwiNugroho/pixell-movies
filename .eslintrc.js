module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'object-curly-newline': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src/',
          '@components': './src/components',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        packages: ['node_modules/*'],
      },
    },
  },
};
