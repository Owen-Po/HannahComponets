import type { Meta, StoryObj } from "@storybook/react";
import { CopyBlock } from "./CopyBlock";

const meta: Meta<typeof CopyBlock> = {
  title: "Components/CopyBlock",
  component: CopyBlock,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Code/text block with one-click copy. Supports code, terminal, and inline variants with language tags, line numbers, and scroll.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["code", "terminal", "inline"],
    },
    showLineNumbers: { control: "boolean" },
    maxHeight: { control: "number" },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CopyBlock>;

/* ─── Code ───────────────────────────────────── */
export const Code: Story = {
  args: {
    variant: "code",
    language: "tsx",
    title: "App.tsx",
    content: `import { CopyBlock } from "hannah-ui";

export default function App() {
  return (
    <CopyBlock
      content="npm install hannah-ui"
      variant="terminal"
      language="bash"
    />
  );
}`,
  },
};

/* ─── Terminal ───────────────────────────────── */
export const Terminal: Story = {
  args: {
    variant: "terminal",
    title: "Terminal",
    content: `npm install hannah-ui
npm run dev`,
  },
};

/* ─── Inline ─────────────────────────────────── */
export const Inline: Story = {
  args: {
    variant: "inline",
    content: "YOUR_API_KEY_HERE",
  },
};

/* ─── With Line Numbers ──────────────────────── */
export const WithLineNumbers: Story = {
  args: {
    variant: "code",
    language: "typescript",
    showLineNumbers: true,
    content: `interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member" | "viewer";
}

function getUser(id: string): Promise<User> {
  return fetch(\`/api/users/\${id}\`)
    .then((res) => res.json());
}`,
  },
};

/* ─── With Title ─────────────────────────────── */
export const WithTitle: Story = {
  args: {
    variant: "code",
    language: "bash",
    title: "install.sh",
    content: `#!/bin/bash
curl -fsSL https://hannah-ui.dev/install.sh | bash
source ~/.bashrc
hannah init my-project`,
  },
};

/* ─── Max Height (scrollable) ────────────────── */
export const MaxHeight: Story = {
  args: {
    variant: "code",
    language: "json",
    title: "package.json",
    maxHeight: 200,
    showLineNumbers: true,
    content: `{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "hannah-ui": "^2.0.0",
    "lucide-react": "^0.400.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "vite": "^6.0.0",
    "@storybook/react": "^8.0.0"
  }
}`,
  },
};
