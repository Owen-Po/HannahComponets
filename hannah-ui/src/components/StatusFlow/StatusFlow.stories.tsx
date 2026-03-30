import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StatusFlow, type FlowStage } from "./StatusFlow";

const meta: Meta<typeof StatusFlow> = {
  title: "Components/StatusFlow",
  component: StatusFlow,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof StatusFlow>;

/* ------------------------------------------------------------------ */
/*  Chevron — Sales pipeline                                           */
/* ------------------------------------------------------------------ */

const salesStages: FlowStage[] = [
  { id: "lead", label: "Lead", count: 24 },
  { id: "qualified", label: "Qualified", count: 18 },
  { id: "proposal", label: "Proposal", value: "$45K" },
  { id: "negotiation", label: "Negotiation", value: "$28K" },
  { id: "closed", label: "Closed Won", value: "$15K" },
];

export const Chevron: Story = {
  args: {
    stages: salesStages,
    activeStage: "proposal",
    completedStages: ["lead", "qualified"],
    variant: "chevron",
  },
};

/* ------------------------------------------------------------------ */
/*  Pills — Support ticket flow                                        */
/* ------------------------------------------------------------------ */

const ticketStages: FlowStage[] = [
  { id: "open", label: "Open" },
  { id: "progress", label: "In Progress" },
  { id: "waiting", label: "Waiting" },
  { id: "resolved", label: "Resolved" },
  { id: "closed", label: "Closed" },
];

export const Pills: Story = {
  args: {
    stages: ticketStages,
    activeStage: "progress",
    completedStages: ["open"],
    variant: "pills",
    accentColor: "#10b981",
  },
};

/* ------------------------------------------------------------------ */
/*  Funnel — Conversion funnel                                         */
/* ------------------------------------------------------------------ */

const funnelStages: FlowStage[] = [
  { id: "visitors", label: "Visitors", value: "10,000" },
  { id: "signups", label: "Signups", value: "2,400" },
  { id: "active", label: "Active", value: "890" },
  { id: "paid", label: "Paid", value: "340" },
  { id: "enterprise", label: "Enterprise", value: "45" },
];

export const Funnel: Story = {
  args: {
    stages: funnelStages,
    activeStage: "active",
    completedStages: ["visitors", "signups"],
    variant: "funnel",
    accentColor: "#8b5cf6",
  },
};

/* ------------------------------------------------------------------ */
/*  Small chevron                                                      */
/* ------------------------------------------------------------------ */

export const Small: Story = {
  args: {
    stages: salesStages,
    activeStage: "proposal",
    completedStages: ["lead", "qualified"],
    variant: "chevron",
    size: "sm",
  },
};

/* ------------------------------------------------------------------ */
/*  Interactive — click to change active stage                         */
/* ------------------------------------------------------------------ */

function InteractiveDemo() {
  const [active, setActive] = useState("lead");

  const completed = salesStages
    .slice(0, salesStages.findIndex((s) => s.id === active))
    .map((s) => s.id);

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Click any stage to set it as active.
      </p>
      <StatusFlow
        stages={salesStages}
        activeStage={active}
        completedStages={completed}
        onStageClick={(stage) => setActive(stage.id)}
        variant="chevron"
      />
      <StatusFlow
        stages={salesStages}
        activeStage={active}
        completedStages={completed}
        onStageClick={(stage) => setActive(stage.id)}
        variant="pills"
        accentColor="#f59e0b"
      />
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
