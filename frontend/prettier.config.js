/**
 * @see https://prettier.io/docs/en/configuration.html
 *
 * @type {import("prettier").Config}
 */

export default {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: 'none',
  tabWidth: 2,
  useTabs: true,
  arrowParens: "avoid"
};
