module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "prefer-arrow-callback": [
      "error"
    ],
    "array-bracket-spacing": 1,
    "object-shorthand": [
      "error",
      "always"
    ],
    "no-var": "error"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "overrides": [
    {
      "files": [
        "**/__tests__/*.{j,t}s?(x)"
      ],
      "env": {
        "jest": true,
      }
    }
  ]
}
