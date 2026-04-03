/**
 * COMPONENTS DATA
 * Este archivo centraliza toda la informacion de los componentes para la landing
 */

export interface ComponentInfo {
  name: string;
  description: string;
  category: string;
  storybookId: string;
  code: string;
}

// Storybook logic to handle production vs development environment
const IS_SERVER = typeof window === "undefined";
export const STORYBOOK_BASE_URL = !IS_SERVER && window.location.hostname === "localhost" 
  ? "http://localhost:6006" 
  : "/storybook/"; // Note the trailing slash for correct relative internal assets

export const COMPONENTS: ComponentInfo[] = [
  {
    name: "Button",
    description: "Highly customizable buttons with multiple states and loading indicators.",
    category: "Controls",
    storybookId: "components-button",
    code: `import { Button } from "@hannah-ui/button";\n\n<Button variant="primary" size="md">\n  Click me\n</Button>`
  },
  {
    name: "Input",
    description: "Floating labels, icons support and validation focus states.",
    category: "Inputs",
    storybookId: "components-input",
    code: `import { Input } from "@hannah-ui/input";\n\n<Input placeholder="Search..." icon={<Search />} />`
  },
  {
    name: "Select",
    description: "Native and custom search-aware dropdown selections.",
    category: "Inputs",
    storybookId: "components-select",
    code: `import { Select } from "@hannah-ui/select";\n\n<Select options={[{ value: '1', label: 'Option 1' }]} />`
  },
  {
    name: "Table",
    description: "Tablas con sorting y striped.",
    category: "Data",
    storybookId: "components-table",
    code: `import { Table } from "@hannah-ui/table";\n\n<Table data={items} columns={cols} />`
  },
  {
    name: "Alert",
    description: "Mensajes contextuales con variantes.",
    category: "Feedback",
    storybookId: "components-alert",
    code: `import { Alert } from "@hannah-ui/alert";\n\n<Alert variant="success">Operation completed!</Alert>`
  },
  {
    name: "Modal",
    description: "Dialogos modales con animaciones.",
    category: "Overlays",
    storybookId: "components-modal",
    code: `import { Modal } from "@hannah-ui/modal";\n\n<Modal isOpen={true} onClose={() => {}} title="Title" />`
  },
  {
    name: "Sidebar",
    description: "Menu lateral colapsable.",
    category: "Layout",
    storybookId: "components-sidebar",
    code: `import { Sidebar } from "@hannah-ui/sidebar";\n\n<Sidebar items={navItems} />`
  },
  {
    name: "StatsCard",
    description: "Tarjetas de estadisticas.",
    category: "Display",
    storybookId: "components-statscard",
    code: `import { StatsCard } from "@hannah-ui/statscard";\n\n<StatsCard label="Sales" value="$1,200" trend="+12%" />`
  }
];

export const FALLBACK_COMPONENTS: ComponentInfo[] = [
  { name: "DatePicker", description: "Advanced date and range selection.", category: "Advanced", storybookId: "components-datepicker", code: `import { DatePicker } from "@hannah-ui/datepicker";` },
  { name: "ColorPicker", description: "RGB/HEX color selector.", category: "Specialized", storybookId: "components-colorpicker", code: `import { ColorPicker } from "@hannah-ui/colorpicker";` },
  { name: "FileDropzone", description: "Drag & drop file upload.", category: "Upload", storybookId: "components-filedropzone", code: `import { FileDropzone } from "@hannah-ui/filedropzone";` },
  { name: "Switch", description: "Toggle switch with label.", category: "Toggles", storybookId: "components-switch", code: `import { Switch } from "@hannah-ui/switch";` },
  { name: "PhoneInput", description: "International phone input.", category: "Inputs", storybookId: "components-phoneinput", code: `import { PhoneInput } from "@hannah-ui/phoneinput";` },
  { name: "DraggableTable", description: "Table with drag & drop sorting.", category: "Advanced", storybookId: "components-draggabletable", code: `import { DraggableTable } from "@hannah-ui/draggabletable";` },
  { name: "DataGrid", description: "Optimized grid for large datasets.", category: "Grid", storybookId: "components-datagrid", code: `import { DataGrid } from "@hannah-ui/datagrid";` },
  { name: "Avatar", description: "Grouped user photos.", category: "UX", storybookId: "components-avatar", code: `import { Avatar } from "@hannah-ui/avatar";` },
  { name: "ModernSidebar", description: "Collapsible sidebar menu.", category: "Layout", storybookId: "components-modernsidebar", code: `import { ModernSidebar } from "@hannah-ui/modernsidebar";` },
];
