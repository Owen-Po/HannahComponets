import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const hannahTheme = create({
  base: "dark",

  // Branding
  brandTitle: "HANNAH UI",
  brandUrl: "/",

  // Colors
  colorPrimary: "#CCFF00",
  colorSecondary: "#CCFF00",

  // UI
  appBg: "#0a0a0a",
  appContentBg: "#0a0a0a",
  appBorderColor: "#2a2a2a",
  appBorderRadius: 8,
  appPreviewBg: "transparent",

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"JetBrains Mono", "Courier New", monospace',

  // Text
  textColor: "#ffffff",
  textInverseColor: "#0a0a0a",
  textMutedColor: "#666666",

  // Toolbar
  barTextColor: "#a0a0a0",
  barSelectedColor: "#CCFF00",
  barHoverColor: "#CCFF00",
  barBg: "#0f0f0f",

  // Inputs
  inputBg: "#1a1a1a",
  inputBorder: "#2a2a2a",
  inputTextColor: "#ffffff",
  inputBorderRadius: 6,

  // Booleans
  booleanBg: "#2a2a2a",
  booleanSelectedBg: "#CCFF00",
});

addons.setConfig({
  theme: hannahTheme,
});
