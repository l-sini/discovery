module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],

  importOrder: [
    "^react$",
    "^next(/.*|$)",
    "<THIRD_PARTY_MODULES>",
    "^@/atoms/(.*)$",
    "^@/molecules/(.*)$",
    "^@/organisms/(.*)$",
    "^@/templates/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^@/mocks/(.*)$",
    "^@/types/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  tailwindConfig: "./tailwind.config.js",
};
