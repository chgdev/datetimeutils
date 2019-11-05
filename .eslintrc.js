module.exports = {
  env: {
    es6: false,
    node: true,
    jest: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9
  },
  "plugins": [
    "es5"
  ],  
  rules: {
    semi: ["error", "always"],
    quotes: ["warn", "double"],
    "arrow-parens": ["warn", "as-needed"],
    "es5/no-arrow-functions": "error",
    indent: ["warn", 2]
  }
};
