import type { Meta, StoryObj } from "@storybook/react";
import { Inbox, Search, Bell, FolderPlus, ImageOff } from "lucide-react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No projects yet",
    description:
      "Get started by creating your first project. It only takes a few seconds.",
    action: {
      label: "Create Project",
      onClick: () => console.log("create"),
      icon: FolderPlus,
    },
  },
};

export const NoSearchResults: Story = {
  args: {
    icon: <Search className="h-7 w-7" style={{ color: "#7c6aff" }} />,
    title: "No results found",
    description:
      "We couldn't find anything matching your search. Try adjusting your filters.",
    action: {
      label: "Clear filters",
      onClick: () => console.log("clear"),
    },
    secondaryAction: {
      label: "Back to all items",
      onClick: () => console.log("back"),
    },
  },
};

export const Card: Story = {
  args: {
    icon: <Bell className="h-7 w-7" style={{ color: "#7c6aff" }} />,
    title: "No notifications",
    description: "You're all caught up! Check back later for new updates.",
    variant: "card",
  },
};

export const Minimal: Story = {
  args: {
    title: "Nothing here",
    description: "This section is empty for now.",
    variant: "minimal",
    action: {
      label: "Add item",
      onClick: () => console.log("add"),
    },
  },
};

export const Small: Story = {
  args: {
    icon: <Inbox className="h-5 w-5" style={{ color: "#7c6aff" }} />,
    title: "No items",
    description: "Add your first item to get started.",
    size: "sm",
    action: {
      label: "Add item",
      onClick: () => console.log("add"),
    },
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <ImageOff className="h-7 w-7" style={{ color: "#e05d44" }} />,
    title: "No images uploaded",
    description: "Drag and drop images here, or click the button below.",
    accentColor: "#e05d44",
    action: {
      label: "Upload images",
      onClick: () => console.log("upload"),
    },
  },
};
