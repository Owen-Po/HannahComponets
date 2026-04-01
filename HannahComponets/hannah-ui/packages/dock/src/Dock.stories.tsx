import type { Meta, StoryObj } from "@storybook/react";
import {
  Home,
  Search,
  Mail,
  Calendar,
  Settings,
  Bell,
} from "lucide-react";
import { Dock } from "./Dock";
import type { DockItem } from "./Dock";

const meta: Meta<typeof Dock> = {
  title: "Components/Dock",
  component: Dock,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Dock>;

/* ------------------------------------------------------------------ */

const defaultItems: DockItem[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "search", icon: Search, label: "Search" },
  { id: "mail", icon: Mail, label: "Mail", badge: 3 },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export const Default: Story = {
  args: { items: defaultItems },
};

export const TopPosition: Story = {
  args: { items: defaultItems, position: "top" },
};

export const WithSeparators: Story = {
  args: {
    items: [
      { id: "home", icon: Home, label: "Home" },
      { id: "search", icon: Search, label: "Search" },
      { type: "separator" },
      { id: "mail", icon: Mail, label: "Mail", badge: 3 },
      { id: "calendar", icon: Calendar, label: "Calendar" },
      { id: "bell", icon: Bell, label: "Notifications", badge: 12 },
      { type: "separator" },
      { id: "settings", icon: Settings, label: "Settings" },
    ] as DockItem[],
  },
};

export const Small: Story = {
  args: { items: defaultItems, size: "sm" },
};

export const Large: Story = {
  args: { items: defaultItems, size: "lg" },
};

export const ActiveState: Story = {
  args: {
    items: [
      { id: "home", icon: Home, label: "Home", isActive: true },
      { id: "search", icon: Search, label: "Search" },
      { id: "mail", icon: Mail, label: "Mail", badge: 3 },
      { id: "calendar", icon: Calendar, label: "Calendar" },
      { id: "settings", icon: Settings, label: "Settings" },
    ],
  },
};
