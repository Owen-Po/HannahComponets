import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageTabs } from "./PageTabs";

const meta: Meta = {
  title: "Components/PageTabs",
  parameters: {
    layout: "padded",
    docs: { description: { component: "Tabs de navegación por página con contadores opcionales y soporte para tabs deshabilitados." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => {
    const [tab, setTab] = useState("all");
    return (
      <div>
        <PageTabs
          activeTab={tab}
          onChange={setTab}
          tabs={[
            { id: "all", label: "Todos", count: 128 },
            { id: "active", label: "Activos", count: 96 },
            { id: "inactive", label: "Inactivos", count: 32 },
            { id: "archived", label: "Archivados", disabled: true },
          ]}
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          Tab activo: <strong>{tab}</strong>
        </div>
      </div>
    );
  },
};
