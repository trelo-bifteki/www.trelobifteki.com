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
    "no-var": "error",
    "no-trailing-spaces": "error",
    "linebreak-style": [ "error", "unix" ],
    "eol-last": [ "error", "always" ],
    "object-curly-newline": [
      "error",
      "always",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      },
    ],
    "no-trailing-spaces": "error",
    "linebreak-style": [
      "error",
      "unix",
    ],
    "eol-last": [
      "error",
      "always",
    ],
/*
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "natural": false,
        "minKeys": 2
      },
    ],
	  */
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "overrides": [
    {
      "files": [
        "**/__tests__/*.{j,t}s?(x)",
        "tests/unit/**/*.{j,t}s?(x)"
      ],
      "env": {
        "jest": true,
      }
    }
  ]
}
