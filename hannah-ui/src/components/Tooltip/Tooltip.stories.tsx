import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TriggerButton = ({ label = "Hover me" }: { label?: string }) => (
  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
    {label}
  </button>
);

export const Default: Story = {
  render: () => (
    <Tooltip content="Save changes">
      <TriggerButton label="Save" />
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-16">
      <Tooltip content="Top tooltip" position="top">
        <TriggerButton label="Top" />
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <TriggerButton label="Bottom" />
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <TriggerButton label="Left" />
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <TriggerButton label="Right" />
      </Tooltip>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <Tooltip content="Light variant tooltip" variant="light">
      <TriggerButton />
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip content="I appear after 300ms" delay={300}>
      <TriggerButton />
    </Tooltip>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <span>
          <strong>Bold text</strong>
          <br />
          Additional info here
        </span>
      }
      maxWidth={250}
    >
      <TriggerButton label="Rich content" />
    </Tooltip>
  ),
};

export const NoArrow: Story = {
  render: () => (
    <Tooltip content="No arrow tooltip" arrow={false}>
      <TriggerButton />
    </Tooltip>
  ),
};
