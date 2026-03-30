import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InlineEdit } from "./InlineEdit";

const meta: Meta<typeof InlineEdit> = {
  title: "Components/InlineEdit",
  component: InlineEdit,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InlineEdit>;

/* ── Helpers ─────────────────────────── */

function Controlled(props: Omit<React.ComponentProps<typeof InlineEdit>, "onSave"> & { initial?: string }) {
  const { initial = props.value, ...rest } = props;
  const [val, setVal] = useState(initial);
  return <InlineEdit {...rest} value={val} onSave={setVal} />;
}

/* ── Stories ──────────────────────────── */

export const Default: Story = {
  render: () => <Controlled value="John Doe" />,
};

export const WithValidation: Story = {
  render: () => (
    <Controlled
      value="Hi"
      validate={(v) => (v.length < 3 ? "Minimum 3 characters" : null)}
    />
  ),
};

export const Textarea: Story = {
  render: () => (
    <Controlled
      value="This is a longer description that can span multiple lines when editing."
      type="textarea"
    />
  ),
};

export const Number: Story = {
  render: () => <Controlled value="42" type="number" />,
};

export const Disabled: Story = {
  render: () => <InlineEdit value="Cannot edit this" onSave={() => {}} disabled />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Controlled value="Small size" size="sm" />
      <Controlled value="Medium size" size="md" />
      <Controlled value="Large size" size="lg" />
    </div>
  ),
};

export const Empty: Story = {
  render: () => <Controlled value="" placeholder="Click to add a name..." />,
};
