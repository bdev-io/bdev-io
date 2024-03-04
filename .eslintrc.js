module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "import/extensions": "off",
    "no-console": "warn",
  },
};
