import type { Meta, StoryObj } from "@storybook/react";
import {
  Home,
  BarChart3,
  Users,
  FolderKanban,
  CheckSquare,
  Settings,
  CreditCard,
  Bell,
  Search,
  FileText,
  MessageSquare,
  Shield,
  Palette,
  Globe,
} from "lucide-react";
import { ModernSidebar } from "./ModernSidebar";
import type { SidebarSection } from "./ModernSidebar";

const meta: Meta<typeof ModernSidebar> = {
  title: "Components/ModernSidebar",
  component: ModernSidebar,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof ModernSidebar>;

const defaultSections: SidebarSection[] = [
  {
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: Home, isActive: true },
      { id: "analytics", label: "Analytics", icon: BarChart3, badge: "New" },
    ],
  },
  {
    label: "Management",
    items: [
      { id: "users", label: "Users", icon: Users, badge: 12 },
      { id: "projects", label: "Projects", icon: FolderKanban },
      { id: "tasks", label: "Tasks", icon: CheckSquare, badge: 5 },
    ],
  },
  {
    label: "Settings",
    items: [
      { id: "general", label: "General", icon: Settings },
      { id: "billing", label: "Billing", icon: CreditCard },
    ],
  },
];

const defaultUser = {
  name: "Hannah Smith",
  email: "hannah@example.com",
};

const LogoIcon = () => (
  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7c6aff] text-xs font-bold text-white">
    H
  </div>
);

const SearchButton = () => (
  <button className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
    <Search size={14} />
  </button>
);

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Hannah UI",
    headerAction: <SearchButton />,
    sections: defaultSections,
    user: defaultUser,
  },
};

export const Collapsed: Story = {
  args: {
    ...Default.args,
    isCollapsed: true,
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    variant: "dark",
    headerAction: (
      <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-gray-500 hover:text-gray-300 transition-colors">
        <Search size={14} />
      </button>
    ),
  },
};

export const Glass: Story = {
  render: (args) => (
    <div
      className="h-screen"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <ModernSidebar {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    variant: "glass",
    headerAction: (
      <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white/50 hover:text-white/80 transition-colors">
        <Search size={14} />
      </button>
    ),
  },
};

const nestedSections: SidebarSection[] = [
  {
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: Home, isActive: true },
      { id: "analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Management",
    items: [
      { id: "users", label: "Users", icon: Users, badge: 12 },
      {
        id: "projects",
        label: "Projects",
        icon: FolderKanban,
        children: [
          { id: "proj-docs", label: "Documents", icon: FileText },
          { id: "proj-msgs", label: "Messages", icon: MessageSquare, badge: 3 },
        ],
      },
      { id: "tasks", label: "Tasks", icon: CheckSquare },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        id: "general",
        label: "General",
        icon: Settings,
        children: [
          { id: "set-security", label: "Security", icon: Shield },
          { id: "set-appearance", label: "Appearance", icon: Palette },
          { id: "set-language", label: "Language", icon: Globe },
        ],
      },
      { id: "billing", label: "Billing", icon: CreditCard },
      { id: "notifications", label: "Notifications", icon: Bell, badge: 8 },
    ],
  },
];

export const WithNested: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Hannah UI",
    sections: nestedSections,
    user: defaultUser,
  },
};

export const RightSide: Story = {
  render: (args) => (
    <div className="flex h-screen justify-end">
      <ModernSidebar {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    position: "right",
  },
};
