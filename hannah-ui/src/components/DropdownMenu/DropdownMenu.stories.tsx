import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu";
import type { DropdownItem } from "./DropdownMenu";
import {
  Pencil,
  Copy,
  Share,
  FolderOpen,
  Trash2,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Archive,
  Star,
} from "lucide-react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// ── Default ──────────────────────────────────────────────────────────────────

const defaultItems: DropdownItem[] = [
  { label: "Edit", icon: Pencil, onClick: () => console.log("Edit") },
  { label: "Duplicate", icon: Copy, onClick: () => console.log("Duplicate") },
  { type: "separator" },
  {
    label: "Share",
    icon: Share,
    shortcut: "⌘S",
    onClick: () => console.log("Share"),
  },
  {
    label: "Move to",
    icon: FolderOpen,
    onClick: () => console.log("Move to"),
  },
  { type: "separator" },
  {
    label: "Delete",
    icon: Trash2,
    danger: true,
    onClick: () => console.log("Delete"),
  },
];

export const Default: Story = {
  args: {
    trigger: (
      <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
    items: defaultItems,
  },
};

// ── UserMenu ─────────────────────────────────────────────────────────────────

const userMenuItems: DropdownItem[] = [
  { type: "label", text: "Signed in as" },
  { label: "user@email.com" },
  { type: "separator" },
  { label: "Profile", icon: User, onClick: () => console.log("Profile") },
  {
    label: "Settings",
    icon: Settings,
    onClick: () => console.log("Settings"),
  },
  { type: "separator" },
  {
    label: "Sign out",
    icon: LogOut,
    danger: true,
    onClick: () => console.log("Sign out"),
  },
];

export const UserMenu: Story = {
  args: {
    trigger: (
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
        U
      </div>
    ),
    items: userMenuItems,
  },
};

// ── WithDisabled ─────────────────────────────────────────────────────────────

const disabledItems: DropdownItem[] = [
  { label: "Edit", icon: Pencil, onClick: () => console.log("Edit") },
  { label: "Duplicate", icon: Copy, disabled: true },
  { type: "separator" },
  { label: "Archive", icon: Archive, disabled: true },
  { label: "Favorite", icon: Star, onClick: () => console.log("Favorite") },
  { type: "separator" },
  { label: "Delete", icon: Trash2, danger: true, disabled: true },
];

export const WithDisabled: Story = {
  args: {
    trigger: (
      <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
    items: disabledItems,
  },
};

// ── AlignStart ───────────────────────────────────────────────────────────────

export const AlignStart: Story = {
  args: {
    trigger: (
      <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
    items: defaultItems,
    align: "start",
  },
};

// ── TopSide ──────────────────────────────────────────────────────────────────

export const TopSide: Story = {
  args: {
    trigger: (
      <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
    items: defaultItems,
    side: "top",
  },
};
