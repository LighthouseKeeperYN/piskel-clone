module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "airbnb-base"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "firebase": false,
    "test": false,
    "expect": false
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    "no-param-reassign": [2, { "props": false }]
  }
};
