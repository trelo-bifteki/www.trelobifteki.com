module.exports = {
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue",
    "stylelint-scss",
  ],
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "color-named": "always-where-possible",
    "custom-property-empty-line-before": "always",
    "declaration-no-important": true,
    "font-family-no-missing-generic-family-keyword": true,
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/no-duplicate-mixins": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "order/properties-alphabetical-order": true,
    "order/order": [
      "custom-properties",
      "declarations"
    ]
  },
}
