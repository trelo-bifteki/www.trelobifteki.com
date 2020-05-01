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
    "array-bracket-spacing": 1,
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "eol-last": [
      "error",
      "always",
    ],
    /*
    indent: [
      "error",
      2
    ],
    */
    "linebreak-style": [
      "error",
      "unix",
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "no-trailing-spaces": "error",
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      "always",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "prefer-arrow-callback": [
      "error"
    ],
    quotes: [
      "error",
      "single"
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
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "tests/unit/**/*.{j,t}s?(x)"
      ],
      env: {
        jest: true,
      },
    }
  ]
}
