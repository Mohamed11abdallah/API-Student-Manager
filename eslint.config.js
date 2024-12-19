export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      // quotes: ['error', 'single'],
      quotes: 'off',
      indent: ['error', 2],
    },
  },
];
