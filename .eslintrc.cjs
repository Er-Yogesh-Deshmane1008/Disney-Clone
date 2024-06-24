module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/react',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     'react-hooks',
//     'jsx-a11y',
//     'import',
//   ],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//   },
// };

