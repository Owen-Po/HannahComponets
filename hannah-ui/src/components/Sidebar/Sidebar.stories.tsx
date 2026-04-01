import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Home, Settings } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const mockCategories = [
  {
    id: "general",
    title: "General",
    modules: [{ id: "home", name: "Home", icon: Home, path: "/home" }],
  },
  {
    id: "config",
    title: "Configuración",
    modules: [
      { id: "settings", name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);

    return (
      <div className="h-screen">
        <Sidebar
          categories={mockCategories}
          isSidebarOpen={open}
          setIsSidebarOpen={setOpen}
          isPinned={pinned}
          setIsPinned={setPinned}
          onNavigate={(path) => alert(`Navigate to ${path}`)}
          renderUser={<div className="text-sm font-medium">Usuario Demo</div>}
          onLogout={() => alert("Logout")}
        />
      </div>
    );
  },
};
