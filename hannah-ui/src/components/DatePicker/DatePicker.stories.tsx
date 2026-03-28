import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta: Meta = {
  title: "Components/DatePicker",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Selector de fecha con calendario desplegable, navegación por mes, botón 'Hoy', y soporte para min/max date. Sin dependencias externas de calendario." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => {
    const [val, setVal] = useState("");
    return <div className="w-72"><DatePicker value={val} onChange={setVal} /></div>;
  },
};

export const WithClear: Story = {
  name: "Clearable",
  render: () => {
    const [val, setVal] = useState("2026-03-15");
    return <div className="w-72"><DatePicker value={val} onChange={setVal} isClearable /></div>;
  },
};

export const WithMinMax: Story = {
  name: "Con min/max",
  render: () => {
    const [val, setVal] = useState("");
    return <div className="w-72"><DatePicker value={val} onChange={setVal} minDate="2026-03-01" maxDate="2026-03-31" /></div>;
  },
};
