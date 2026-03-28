import type { Preview, Decorator } from "@storybook/react";
import { create } from "storybook/theming";
import "../src/index.css";
import "./hannah-theme.css";

/* ── Theme for docs pages ── */
const hannahDocsTheme = create({
  base: "dark",
  colorPrimary: "#CCFF00",
  colorSecondary: "#CCFF00",
  appBg: "#0a0a0a",
  appContentBg: "#0f0f0f",
  appBorderColor: "#2a2a2a",
  textColor: "#ffffff",
  textMutedColor: "#666666",
  fontBase: '"Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
});

/*
  Dark mode decorator — SOLO se aplica si el story
  tiene un fondo oscuro seleccionado. El Dashboard
  maneja su propio fondo via inline styles.
*/
const withDarkMode: Decorator = (StoryFn, context) => {
  const bg = context.globals?.backgrounds?.value;
  // Solo activar dark si el usuario explícitamente eligió un fondo oscuro
  const darkBgs = ["#0a0a0a", "#1a0f2e", "#141414"];
  const isDark = typeof bg === "string" && darkBgs.includes(bg);
  document.documentElement.classList.toggle("dark", isDark);
  return StoryFn();
};

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [withDarkMode],
  globalTypes: {
    backgrounds: {
      defaultValue: { name: "Light", value: "#ffffff" },
    },
  },
  parameters: {
    backgrounds: {
      default: "Light",
      values: [
        { name: "Light", value: "#ffffff" },
        { name: "HANNAH Dark", value: "#0a0a0a" },
        { name: "Dark Purple", value: "#1a0f2e" },
        { name: "Dark Gray", value: "#141414" },
      ],
    },
    layout: "centered",
    options: {
      storySort: {
        order: ["Welcome", "Components", "Templates"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: hannahDocsTheme,
    },
  },
};

export default preview;
