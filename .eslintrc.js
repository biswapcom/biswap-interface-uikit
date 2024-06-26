module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier", "plugin:lodash/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "lodash", "react-hooks"],
  rules: {
    "import/no-unresolved": 0,
    "no-console": ["warn", { allow: ["info", "warn", "error", "debug"] }],
    "no-plusplus": 0,
    "prefer-destructuring": ["warn", { object: true, array: false }],
    "lodash/prefer-lodash-typecheck": 0,
    "no-underscore-dangle": 0,
    //"lodash/import-scope": [2, "method"],
    "lodash/collection-ordering": 0,
    "lodash/prefer-constant": 0,
    "no-sparse-arrays": 0,
    "require-jsdoc": 0,
    "spaced-comment": 0,
    "new-cap": 0,
    "react/prop-types": 0,
    "lodash/import-scope": 0,
    "lodash/prefer-immutable-method": 0,
    "react/display-name": 0,
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx", "global"],
      },
    ],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useFastRefreshEffect|useSlowRefreshEffect)",
      },
    ],
    // Start temporary rules
    // These rules are here just to keep the lint error to 0 during the migration to the new rule set
    // They need to be removed and fixed as soon as possible
    "@typescript-eslint/ban-ts-comment": [1, { "ts-ignore": false, "ts-nocheck": false }],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    radix: 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/media-has-caption": 0,
    // Exchange
    "no-param-reassign": 0,
    "react/require-default-props": 0,
    "no-nested-ternary": 0,
    "max-classes-per-file": 0,
    // End temporary rules
    "valid-jsdoc": 0,
    camelcase: "off",
    "import/prefer-default-export": 0,
    "no-use-before-define": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "react/no-multi-comp": 0,
    "lodash/prefer-lodash-method": 0,
    // These rules are here just to keep the lint error to 0 during the migration to the new rule set
    // They need to be removed and fixed as soon as possible
    "@typescript-eslint/no-use-before-define": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
