import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#5d42e6",
  colorSecondary: "#795cf4",

  // UI
  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e4e4e7",
  appBorderRadius: 8,

  // Fonts
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode:
    '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", Menlo, monospace',

  // Text colors
  textColor: "#18181b",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#71717a",
  barSelectedColor: "#5d42e6",
  barHoverColor: "#5d42e6",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#d4d4d8",
  inputTextColor: "#18181b",
  inputBorderRadius: 6,

  // Brand
  brandTitle: "@sapyhte/design-system",
  brandUrl: "https://github.com/insn26/saphyte-ds",
  brandTarget: "_self",
});
