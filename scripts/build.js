const fs = require("fs");
const path = require("path");

const base = require("../themes/base.json");
const syntax = require("../themes/syntax.json");
const ui = require("../themes/ui.json");

const finalTheme = {
  ...base,
  colors: {
    ...ui,
  },
  tokenColors: syntax,
};

fs.writeFileSync(
  path.join(__dirname, "../themes/theme-dark.json"),
  JSON.stringify(finalTheme, null, 2)
);