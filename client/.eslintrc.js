module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['airbnb-base', 'plugin:react/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'firebase': false,
    'test': false,
    'expect': false,
    'it': false
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
    'no-param-reassign': [2, { 'props': false }],
    'react/prop-types': [2, { ignore: ['children'] }],
    'object-curly-newline': ['error', { 'ObjectPattern': { 'multiline': true } }],
    'no-bitwise': ["error", { "allow": ["<<"] }]
  }
};
