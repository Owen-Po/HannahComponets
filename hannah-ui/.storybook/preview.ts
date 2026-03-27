import type { Preview, Decorator } from "@storybook/react";
import "../src/index.css";
import "./hannah-theme.css";

/* Sincroniza la clase `dark` del <html> con el background seleccionado */
const withDarkMode: Decorator = (StoryFn, context) => {
  const bg = context.globals?.backgrounds?.value;
  const isDark = bg !== "#ffffff";
  document.documentElement.classList.toggle("dark", isDark);
  return StoryFn();
};

const preview: Preview = {
  decorators: [withDarkMode],
  globalTypes: {
    backgrounds: {
      defaultValue: { name: "HANNAH Dark", value: "#0a0a0a" },
    },
  },
  parameters: {
    backgrounds: {
      default: "HANNAH Dark",
      values: [
        { name: "HANNAH Dark", value: "#0a0a0a" },
        { name: "Dark Purple", value: "#1a0f2e" },
        { name: "Dark Gray", value: "#141414" },
        { name: "Light", value: "#ffffff" },
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
    docs: {},
  },
};

export default preview;
