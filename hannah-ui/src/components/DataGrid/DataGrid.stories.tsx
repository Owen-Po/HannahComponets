import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DataGrid } from "./DataGrid";
import type { DataGridColumn } from "./DataGrid";

interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  active: boolean;
  startDate: string;
}

const departmentOptions = [
  { label: "Engineering", value: "Engineering" },
  { label: "Design", value: "Design" },
  { label: "Marketing", value: "Marketing" },
  { label: "Sales", value: "Sales" },
];

const columns: DataGridColumn<Employee>[] = [
  { key: "name", label: "Name", editable: true, type: "text", minWidth: 160 },
  {
    key: "department",
    label: "Department",
    editable: true,
    type: "select",
    options: departmentOptions,
    minWidth: 140,
  },
  {
    key: "salary",
    label: "Salary",
    editable: true,
    type: "number",
    align: "right",
    minWidth: 110,
    render: (v) => `$${Number(v).toLocaleString()}`,
  },
  { key: "active", label: "Status", editable: true, type: "boolean", width: 80, align: "center" },
  { key: "startDate", label: "Start Date", type: "text", minWidth: 120 },
];

const sampleData: Employee[] = [
  { id: 1, name: "Alice Johnson", department: "Engineering", salary: 125000, active: true, startDate: "2021-03-15" },
  { id: 2, name: "Bob Martinez", department: "Design", salary: 98000, active: true, startDate: "2022-06-01" },
  { id: 3, name: "Carol Chen", department: "Marketing", salary: 87000, active: false, startDate: "2020-11-20" },
  { id: 4, name: "David Kim", department: "Engineering", salary: 142000, active: true, startDate: "2019-08-10" },
  { id: 5, name: "Eva Petrov", department: "Sales", salary: 76000, active: true, startDate: "2023-01-09" },
  { id: 6, name: "Frank Lopez", department: "Engineering", salary: 134000, active: true, startDate: "2020-04-22" },
  { id: 7, name: "Grace Okafor", department: "Design", salary: 105000, active: false, startDate: "2021-09-30" },
  { id: 8, name: "Henry Tanaka", department: "Marketing", salary: 91000, active: true, startDate: "2022-12-05" },
];

const meta: Meta<typeof DataGrid> = {
  title: "Components/DataGrid",
  component: DataGrid,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof DataGrid<Employee>>;

// --- Stateful wrapper for editable stories ---
function EditableGrid(props: React.ComponentProps<typeof DataGrid<Employee>>) {
  const [data, setData] = useState(props.data as Employee[]);

  const handleEdit = (rowIndex: number, key: string, value: any) => {
    setData((prev) => prev.map((row, i) => (i === rowIndex ? { ...row, [key]: value } : row)));
    props.onCellEdit?.(rowIndex, key, value);
  };

  return <DataGrid {...props} data={data} onCellEdit={handleEdit} />;
}

function SelectableGrid(props: React.ComponentProps<typeof DataGrid<Employee>>) {
  const [data, setData] = useState(props.data as Employee[]);
  const [selected, setSelected] = useState<number[]>([]);

  const handleEdit = (rowIndex: number, key: string, value: any) => {
    setData((prev) => prev.map((row, i) => (i === rowIndex ? { ...row, [key]: value } : row)));
  };

  return (
    <DataGrid
      {...props}
      data={data}
      onCellEdit={handleEdit}
      selectedRows={selected}
      onSelectionChange={setSelected}
    />
  );
}

export const Default: Story = {
  render: () => (
    <EditableGrid columns={columns} data={sampleData} rowKey="id" />
  ),
};

export const Compact: Story = {
  render: () => (
    <EditableGrid columns={columns} data={sampleData} rowKey="id" compact />
  ),
};

export const WithSelection: Story = {
  render: () => (
    <SelectableGrid columns={columns} data={sampleData} rowKey="id" />
  ),
};

export const Editable: Story = {
  render: (args) => (
    <EditableGrid
      columns={columns.map((c) => ({ ...c, editable: true }))}
      data={sampleData}
      rowKey="id"
      onCellEdit={args.onCellEdit}
    />
  ),
  args: {
    onCellEdit: (() => {}) as any,
  },
  argTypes: {
    onCellEdit: { action: "cellEdited" },
  } as any,
};

export const Empty: Story = {
  render: () => (
    <DataGrid columns={columns} data={[]} emptyMessage="No employees found." />
  ),
};

export const Striped: Story = {
  render: () => (
    <EditableGrid columns={columns} data={sampleData} rowKey="id" striped />
  ),
};
