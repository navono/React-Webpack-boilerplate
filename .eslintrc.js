module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["babel", "react", "import", "jsx-a11y"],
  // 全局变量
  globals: {
    process: false,
    module: false,
    require: false,
    __dirname: false
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }]
  }
};
