module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'no-unreachable': 'error',
    'prefer-arrow-callback': 'error',
    'linebreak-style': ['error', 'unix'],
  },
}
