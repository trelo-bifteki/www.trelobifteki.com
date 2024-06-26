module.exports = {
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-scss",
  ],
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "at-rule-semicolon-newline-after": "always",
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "color-named": "always-where-possible",
    "comment-whitespace-inside": "always",
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "color-hex-case": "upper",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-no-important": true,
    "function-comma-space-after": "always",
    "font-family-no-missing-generic-family-keyword": true,
    "indentation": 2,
    "max-empty-lines": 2,
    "number-leading-zero": "never",
    "selector-combinator-space-after": "always",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/no-duplicate-mixins": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-list-comma-newline-after": "always",
    "order/properties-alphabetical-order": true,
    "order/order": [
      "custom-properties",
      "declarations"
    ]
  },
}
