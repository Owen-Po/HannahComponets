import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  FilePlus,
  FolderPlus,
  Import,
  LayoutDashboard,
  Settings,
  UserCircle,
  BookOpen,
  LifeBuoy,
  ListOrdered,
} from "lucide-react";
import { CommandPalette } from "./CommandPalette";
import type { CommandGroup } from "./CommandPalette";

const meta: Meta<typeof CommandPalette> = {
  title: "Components/CommandPalette",
  component: CommandPalette,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

/* ── Shared data ─────────────────────── */

const defaultGroups: CommandGroup[] = [
  {
    label: "Quick Actions",
    commands: [
      { id: "new-file", label: "New File", icon: FilePlus, shortcut: "⌘N", description: "Create a new file", onSelect: () => console.log("New File") },
      { id: "new-project", label: "New Project", icon: FolderPlus, shortcut: "⌘⇧N", description: "Start a new project", onSelect: () => console.log("New Project") },
      { id: "import", label: "Import", icon: Import, shortcut: "⌘I", description: "Import from file or URL", onSelect: () => console.log("Import") },
    ],
  },
  {
    label: "Navigation",
    commands: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, shortcut: "⌘D", description: "Go to dashboard", onSelect: () => console.log("Dashboard") },
      { id: "settings", label: "Settings", icon: Settings, shortcut: "⌘,", description: "Open settings", onSelect: () => console.log("Settings") },
      { id: "profile", label: "Profile", icon: UserCircle, description: "View your profile", onSelect: () => console.log("Profile") },
    ],
  },
  {
    label: "Help",
    commands: [
      { id: "docs", label: "Documentation", icon: BookOpen, description: "Read the docs", onSelect: () => console.log("Docs") },
      { id: "support", label: "Support", icon: LifeBuoy, description: "Get help from our team", onSelect: () => console.log("Support") },
      { id: "changelog", label: "Changelog", icon: ListOrdered, description: "See what's new", onSelect: () => console.log("Changelog") },
    ],
  },
];

/* ── Wrapper to manage open state ──── */

function PaletteWrapper(props: Omit<React.ComponentProps<typeof CommandPalette>, "isOpen" | "onClose">) {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-gray-900"
        >
          Press ⌘K to open
        </button>
      )}
      <CommandPalette {...props} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/* ── Stories ──────────────────────────── */

export const Default: Story = {
  render: () => <PaletteWrapper groups={defaultGroups} />,
};

export const WithSearch: Story = {
  name: "With Search",
  render: () => <PaletteWrapper groups={defaultGroups} placeholder="Search actions..." />,
};

export const CustomAccent: Story = {
  name: "Custom Accent",
  render: () => <PaletteWrapper groups={defaultGroups} accentColor="#e45a84" />,
};

export const Empty: Story = {
  render: () => (
    <PaletteWrapper
      groups={[]}
      emptyMessage="Nothing here yet. Try adding some commands."
    />
  ),
};
