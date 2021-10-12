module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      jsx: true, // Allows for the parsing of JSX
    },
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
    "react-app",
  ],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/prop-types": "off"
  },
  "env": {
    "browser": true,
    "es6": true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "root": true
}

