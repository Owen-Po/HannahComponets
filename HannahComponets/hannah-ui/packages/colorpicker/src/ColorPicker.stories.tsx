import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";

const meta: Meta = {
  title: "Components/ColorPicker",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Selector de color con picker visual, input hexadecimal y presets configurables." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => {
    const [color, setColor] = useState("#3b82f6");
    return <ColorPicker value={color} onChange={setColor} label="Color del tema" />;
  },
};

export const CustomPresets: Story = {
  name: "Presets personalizados",
  render: () => {
    const [color, setColor] = useState("#CCFF00");
    return <ColorPicker value={color} onChange={setColor} presets={["#CCFF00", "#0a0a0a", "#ffffff", "#ef4444", "#3b82f6"]} />;
  },
};
