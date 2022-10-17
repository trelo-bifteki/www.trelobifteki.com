module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    '@vue/typescript'
  ],

  "env": {
    "node": true
  },

  "rules": {
    "array-bracket-spacing": [
      "error",
      "always",
    ],
    "arrow-parens": [
      "error",
      "as-needed",
    ],
    "block-spacing": [
      "error",
      "always",
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "camelcase": "error",
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "consistent-return": "error",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "eol-last": [
      "error",
      "always",
    ],
    indent: [
      "error",
      2
    ],
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true,
      },
    ],
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
    "no-extra-parens": "error",
    "no-unexpected-multiline": "error",
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
    "object-shorthand": [
      "warn",
      "always",
    ],
    "prefer-arrow-callback": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
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
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        'tests/unit/**/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
