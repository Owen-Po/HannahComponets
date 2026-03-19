import type { Preview, Decorator } from "@storybook/react";
import "../src/index.css";

/* Sincroniza la clase `dark` del <html> con el background seleccionado */
const withDarkMode: Decorator = (StoryFn, context) => {
  const bg = context.globals?.backgrounds?.value;
  const isDark = bg === "#0f172a" || bg === "#1e1e1e";
  document.documentElement.classList.toggle("dark", isDark);
  return StoryFn();
};

const preview: Preview = {
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
        { name: "Dark", value: "#0f172a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
