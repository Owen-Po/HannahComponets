import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import {
  Home,
  Package,
  CreditCard,
  Info,
  Search,
  Bell,
  Zap,
  Layers,
} from "lucide-react";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

/* ─── Helpers ──────────────────────────────────────── */

const defaultLinks = [
  { label: "Home", href: "#", icon: Home, isActive: true },
  { label: "Products", href: "#", icon: Package },
  { label: "Pricing", href: "#", icon: CreditCard },
  { label: "About", href: "#", icon: Info },
];

const LogoIcon = () => (
  <div className="flex items-center justify-center size-7 rounded-lg bg-zinc-900 dark:bg-white">
    <Zap className="size-3.5 text-white dark:text-zinc-900" />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="px-3.5 py-1.5 text-[13px] font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200"
  >
    {children}
  </button>
);

const IconButton = ({
  children,
  badge,
}: {
  children: React.ReactNode;
  badge?: boolean;
}) => (
  <button
    type="button"
    className="relative flex items-center justify-center size-8 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
  >
    {children}
    {badge && (
      <span className="absolute top-1 right-1 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-900" />
    )}
  </button>
);

const AvatarCircle = () => (
  <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-white/80 dark:ring-zinc-800" />
);

/* ─── Stories ──────────────────────────────────────── */

export const Default: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    actions: <ActionButton>Get Started</ActionButton>,
    variant: "floating",
  },
};

export const Fixed: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks.map((l) => ({ ...l, icon: undefined })),
    variant: "fixed",
    actions: (
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-[13px] w-52">
        <Search className="size-3.5 shrink-0" />
        <span>Search...</span>
      </div>
    ),
  },
};

export const WithAvatar: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    variant: "bordered",
    actions: (
      <div className="flex items-center gap-1">
        <IconButton badge>
          <Bell className="size-4" />
        </IconButton>
        <AvatarCircle />
      </div>
    ),
  },
};

export const Branded: Story = {
  args: {
    logo: (
      <div className="flex items-center justify-center size-7 rounded-lg bg-violet-600">
        <Layers className="size-3.5 text-white" />
      </div>
    ),
    brandName: "Violet",
    links: [
      { label: "Dashboard", href: "#", isActive: true },
      { label: "Analytics", href: "#" },
      { label: "Settings", href: "#" },
      { label: "Docs", href: "#" },
    ],
    accentColor: "#7c3aed",
    variant: "floating",
    actions: (
      <button
        type="button"
        className="px-3.5 py-1.5 text-[13px] font-medium rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-200"
      >
        Upgrade
      </button>
    ),
  },
};

export const Minimal: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    variant: "floating",
    actions: (
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="px-3 py-1.5 text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Sign in
        </button>
        <ActionButton>Sign up</ActionButton>
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    variant: "floating",
    actions: <ActionButton>Get Started</ActionButton>,
  },
  decorators: [
    (Story) => (
      <div className="dark bg-zinc-950 p-8 -m-4 min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};
