import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";
import {
  Package,
  Truck,
  CheckCircle,
  MapPin,
  MessageSquare,
  Upload,
  FolderPlus,
  Star,
  GitBranch,
  Zap,
} from "lucide-react";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Order placed",
        description: "Your order #4821 has been confirmed.",
        timestamp: "Mar 15",
        status: "completed",
      },
      {
        id: "2",
        title: "Processing",
        description: "We are preparing your items for shipment.",
        timestamp: "Mar 16",
        status: "completed",
      },
      {
        id: "3",
        title: "Shipped",
        description: "Your package is on its way via express delivery.",
        timestamp: "Mar 17",
        status: "active",
      },
      {
        id: "4",
        title: "Delivered",
        description: "Estimated arrival: Mar 19",
        status: "pending",
      },
    ],
  },
};

export const ActivityFeed: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "John created a project",
        description: "New project 'Hannah UI' was initialized.",
        timestamp: "2 hours ago",
        status: "completed",
      },
      {
        id: "2",
        title: "Sarah commented",
        description: '"Looks great! Let\'s add a timeline component."',
        timestamp: "1 hour ago",
        status: "completed",
      },
      {
        id: "3",
        title: "Mike uploaded files",
        description: "Added 3 design assets to the project.",
        timestamp: "30 min ago",
        status: "active",
      },
    ],
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    items: [
      {
        id: "1",
        title: "v2.0 released",
        timestamp: "Jan 10",
        status: "completed",
      },
      {
        id: "2",
        title: "Bug fix for login flow",
        timestamp: "Jan 8",
        status: "completed",
      },
      {
        id: "3",
        title: "New dashboard design",
        timestamp: "Jan 5",
        status: "completed",
      },
      {
        id: "4",
        title: "API v3 migration",
        timestamp: "In progress",
        status: "active",
      },
      {
        id: "5",
        title: "Mobile app launch",
        timestamp: "Planned",
        status: "pending",
      },
    ],
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    items: [
      {
        id: "1",
        title: "Deployment successful",
        description: "Production build v3.2.1 deployed to all regions.",
        timestamp: "Today, 2:30 PM",
        status: "completed",
        content: (
          <div className="flex gap-2">
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Production
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              v3.2.1
            </span>
          </div>
        ),
      },
      {
        id: "2",
        title: "Code review approved",
        description: "PR #142 was approved by 2 reviewers.",
        timestamp: "Today, 1:15 PM",
        status: "completed",
      },
      {
        id: "3",
        title: "Running tests",
        description: "Integration test suite in progress (47/120).",
        timestamp: "Now",
        status: "active",
        content: (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-violet-500"
              style={{ width: "39%" }}
            />
          </div>
        ),
      },
      {
        id: "4",
        title: "Staging deployment",
        description: "Waiting for tests to complete.",
        status: "pending",
      },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Repository created",
        icon: GitBranch,
        iconColor: "#10b981",
        status: "completed",
        timestamp: "Week ago",
      },
      {
        id: "2",
        title: "First commit pushed",
        icon: Zap,
        iconColor: "#f59e0b",
        status: "completed",
        timestamp: "6 days ago",
      },
      {
        id: "3",
        title: "Package published",
        icon: Package,
        iconColor: "#6366f1",
        status: "completed",
        timestamp: "3 days ago",
      },
      {
        id: "4",
        title: "Shipping to users",
        icon: Truck,
        iconColor: "#3b82f6",
        status: "active",
        timestamp: "Now",
        description: "Rolling out to all customers.",
      },
      {
        id: "5",
        title: "Community milestone",
        icon: Star,
        iconColor: "#eab308",
        status: "pending",
        description: "Reach 1,000 stars on GitHub.",
      },
    ],
  },
};
