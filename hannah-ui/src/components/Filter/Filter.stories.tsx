import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  FilterSelect,
  FilterSearch,
  FilterDate,
  FilterDateRange,
  FilterChips,
  FilterBar,
  FilterButton,
} from "./Filter";
import { Building2, Users, FolderOpen, Tag, MapPin, CircleDot } from "lucide-react";

const meta: Meta = {
  title: "Components/Filter",
  tags: ["autodocs"],
  decorators: [(Story) => <div className="p-6 max-w-3xl"><Story /></div>],
};

export default meta;
type Story = StoryObj;

/* ─── FilterSelect ────────────────────── */

const proyectos = [
  { value: "p1", label: "Sistema de Ventas", icon: <FolderOpen className="w-4 h-4" /> },
  { value: "p2", label: "App Móvil", icon: <FolderOpen className="w-4 h-4" /> },
  { value: "p3", label: "Portal Web", icon: <FolderOpen className="w-4 h-4" /> },
  { value: "p4", label: "API Gateway", icon: <FolderOpen className="w-4 h-4" /> },
];

export const SelectBasico: Story = {
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    return (
      <FilterSelect
        options={proyectos}
        value={val}
        onChange={setVal}
        placeholder="Proyecto"
        icon={<FolderOpen className="w-4 h-4" />}
      />
    );
  },
};

export const SelectConBusqueda: Story = {
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    const ciudades = [
      { value: "lima", label: "Lima" },
      { value: "arequipa", label: "Arequipa" },
      { value: "trujillo", label: "Trujillo" },
      { value: "cusco", label: "Cusco" },
      { value: "piura", label: "Piura" },
      { value: "chiclayo", label: "Chiclayo" },
      { value: "huancayo", label: "Huancayo" },
      { value: "iquitos", label: "Iquitos" },
    ];
    return (
      <FilterSelect
        options={ciudades}
        value={val}
        onChange={setVal}
        placeholder="Ciudad"
        isSearchable
        icon={<MapPin className="w-4 h-4" />}
        label="Ciudad"
      />
    );
  },
};

export const SelectVariantes: Story = {
  render: () => {
    const [v1, setV1] = useState<string | undefined>();
    const [v2, setV2] = useState<string | undefined>();
    const [v3, setV3] = useState<string | undefined>();
    const opts = [
      { value: "a", label: "Opción A" },
      { value: "b", label: "Opción B" },
      { value: "c", label: "Opción C" },
    ];
    return (
      <div className="flex flex-wrap gap-4">
        <FilterSelect options={opts} value={v1} onChange={setV1} variant="default" placeholder="Default" />
        <FilterSelect options={opts} value={v2} onChange={setV2} variant="filled" placeholder="Filled" />
        <FilterSelect options={opts} value={v3} onChange={setV3} variant="ghost" placeholder="Ghost" />
      </div>
    );
  },
};

export const SelectTamaños: Story = {
  render: () => {
    const [v1, setV1] = useState<string | undefined>();
    const [v2, setV2] = useState<string | undefined>();
    const [v3, setV3] = useState<string | undefined>();
    const opts = [{ value: "a", label: "Opción" }];
    return (
      <div className="flex items-end gap-4">
        <FilterSelect options={opts} value={v1} onChange={setV1} size="sm" placeholder="Small" />
        <FilterSelect options={opts} value={v2} onChange={setV2} size="md" placeholder="Medium" />
        <FilterSelect options={opts} value={v3} onChange={setV3} size="lg" placeholder="Large" />
      </div>
    );
  },
};

/* ─── FilterSearch ────────────────────── */

export const Busqueda: Story = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <div className="space-y-2">
        <FilterSearch value={val} onChange={setVal} placeholder="Buscar empleado..." />
        <p className="text-xs text-gray-500">Valor (debounced): "{val}"</p>
      </div>
    );
  },
};

/* ─── FilterDateRange ─────────────────── */

export const RangoFechas: Story = {
  render: () => {
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    return (
      <div className="space-y-2">
        <FilterDateRange from={from} to={to} onChange={(f, t) => { setFrom(f); setTo(t); }} />
        <p className="text-xs text-gray-500">Desde: {from ?? "—"} / Hasta: {to ?? "—"}</p>
      </div>
    );
  },
};

/* ─── FilterChips ─────────────────────── */

export const ChipsMultiSelect: Story = {
  render: () => {
    const [val, setVal] = useState<string[]>(["activo"]);
    const estados = [
      { value: "activo", label: "Activo", icon: <CircleDot className="w-3 h-3 text-emerald-500" /> },
      { value: "pausado", label: "Pausado", icon: <CircleDot className="w-3 h-3 text-amber-500" /> },
      { value: "cerrado", label: "Cerrado", icon: <CircleDot className="w-3 h-3 text-red-500" /> },
      { value: "borrador", label: "Borrador", icon: <CircleDot className="w-3 h-3 text-gray-400" /> },
    ];
    return <FilterChips options={estados} value={val} onChange={setVal} label="Estado" />;
  },
};

/* ─── FilterBar (todo junto) ──────────── */

export const BarraCompleta: Story = {
  render: () => {
    const [proyecto, setProyecto] = useState<string | undefined>();
    const [area, setArea] = useState<string | undefined>();
    const [busqueda, setBusqueda] = useState("");
    const [estados, setEstados] = useState<string[]>([]);
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();

    const areas = [
      { value: "ti", label: "TI", icon: <Building2 className="w-4 h-4" /> },
      { value: "rrhh", label: "RRHH", icon: <Users className="w-4 h-4" /> },
      { value: "ventas", label: "Ventas", icon: <Tag className="w-4 h-4" /> },
    ];

    const estadoOpts = [
      { value: "activo", label: "Activo" },
      { value: "inactivo", label: "Inactivo" },
      { value: "pendiente", label: "Pendiente" },
    ];

    const activeCount = [proyecto, area, busqueda, estados.length > 0 ? "x" : undefined, from, to]
      .filter(Boolean).length;

    const clearAll = () => {
      setProyecto(undefined);
      setArea(undefined);
      setBusqueda("");
      setEstados([]);
      setFrom(undefined);
      setTo(undefined);
    };

    return (
      <div className="space-y-4">
        <FilterBar activeCount={activeCount} onClearAll={clearAll}>
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." className="w-52" />
          <FilterSelect
            options={proyectos}
            value={proyecto}
            onChange={setProyecto}
            placeholder="Proyecto"
            icon={<FolderOpen className="w-4 h-4" />}
            isSearchable
          />
          <FilterSelect
            options={areas}
            value={area}
            onChange={setArea}
            placeholder="Área"
            icon={<Building2 className="w-4 h-4" />}
          />
        </FilterBar>

        <FilterChips options={estadoOpts} value={estados} onChange={setEstados} label="Estado" />

        <FilterDateRange from={from} to={to} onChange={(f, t) => { setFrom(f); setTo(t); }} />

        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">
          <pre>{JSON.stringify({ proyecto, area, busqueda, estados, from, to }, null, 2)}</pre>
        </div>
      </div>
    );
  },
};

/* ─── FilterButton (botón con popover) ─── */

export const BotonFiltroBasico: Story = {
  render: () => {
    const [nombre, setNombre] = useState("");
    const [id, setId] = useState("");
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();

    const activeCount = [nombre, id, from, to].filter(Boolean).length;

    const clearAll = () => { setNombre(""); setId(""); setFrom(undefined); setTo(undefined); };

    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Haz click en el botón para abrir los filtros:</p>
        <FilterButton activeCount={activeCount} onClearAll={clearAll}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Ej: 001"
              className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Buscar por nombre..."
              className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>
          <FilterDateRange from={from} to={to} onChange={(f, t) => { setFrom(f); setTo(t); }} size="sm" />
        </FilterButton>

        {activeCount > 0 && (
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">
            <pre>{JSON.stringify({ id, nombre, from, to }, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  },
};

export const BotonFiltroConSelects: Story = {
  render: () => {
    const [proyecto, setProyecto] = useState<string | undefined>();
    const [area, setArea] = useState<string | undefined>();
    const [estado, setEstado] = useState<string | undefined>();

    const areas = [
      { value: "ti", label: "Tecnología", icon: <Building2 className="w-4 h-4" /> },
      { value: "rrhh", label: "Recursos Humanos", icon: <Users className="w-4 h-4" /> },
      { value: "ventas", label: "Ventas", icon: <Tag className="w-4 h-4" /> },
    ];

    const estados = [
      { value: "activo", label: "Activo" },
      { value: "inactivo", label: "Inactivo" },
      { value: "pendiente", label: "Pendiente" },
    ];

    const activeCount = [proyecto, area, estado].filter(Boolean).length;
    const clearAll = () => { setProyecto(undefined); setArea(undefined); setEstado(undefined); };

    return (
      <FilterButton
        activeCount={activeCount}
        onClearAll={clearAll}
        label="Filtrar"
        panelWidth="360px"
      >
        <FilterSelect
          options={proyectos}
          value={proyecto}
          onChange={setProyecto}
          placeholder="Seleccionar proyecto"
          label="Proyecto"
          icon={<FolderOpen className="w-4 h-4" />}
          isSearchable
        />
        <FilterSelect
          options={areas}
          value={area}
          onChange={setArea}
          placeholder="Seleccionar área"
          label="Área"
        />
        <FilterSelect
          options={estados}
          value={estado}
          onChange={setEstado}
          placeholder="Seleccionar estado"
          label="Estado"
        />
      </FilterButton>
    );
  },
};

export const BotonFiltroAlineadoDerecha: Story = {
  render: () => {
    const [busqueda, setBusqueda] = useState("");
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();

    const activeCount = [busqueda, from, to].filter(Boolean).length;

    return (
      <div className="flex justify-end">
        <FilterButton
          activeCount={activeCount}
          onClearAll={() => { setBusqueda(""); setFrom(undefined); setTo(undefined); }}
          align="right"
        >
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." size="sm" />
          <FilterDateRange from={from} to={to} onChange={(f, t) => { setFrom(f); setTo(t); }} size="sm" />
        </FilterButton>
      </div>
    );
  },
};

/* ─── FilterDate (single date picker) ──── */

export const FechaSimple: Story = {
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return (
      <div className="space-y-3 max-w-xs">
        <FilterDate value={fecha} onChange={setFecha} placeholder="Seleccionar fecha..." />
        <p className="text-xs text-gray-500">Valor: {fecha ?? "—"}</p>
      </div>
    );
  },
};

export const FechaConLabel: Story = {
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return (
      <FilterDate value={fecha} onChange={setFecha} label="Fecha de nacimiento" className="max-w-xs" />
    );
  },
};

export const FechaTamaños: Story = {
  render: () => {
    const [f1, setF1] = useState<string | undefined>();
    const [f2, setF2] = useState<string | undefined>();
    const [f3, setF3] = useState<string | undefined>();
    return (
      <div className="flex items-end gap-4">
        <FilterDate value={f1} onChange={setF1} size="sm" placeholder="Small" className="w-48" />
        <FilterDate value={f2} onChange={setF2} size="md" placeholder="Medium" className="w-52" />
        <FilterDate value={f3} onChange={setF3} size="lg" placeholder="Large" className="w-56" />
      </div>
    );
  },
};

export const FechaEnBotonFiltro: Story = {
  render: () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState<string | undefined>();

    const activeCount = [id, nombre, fecha].filter(Boolean).length;
    const clearAll = () => { setId(""); setNombre(""); setFecha(undefined); };

    return (
      <FilterButton activeCount={activeCount} onClearAll={clearAll}>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ej: 001"
            className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"
          />
        </div>
        <FilterDate value={fecha} onChange={setFecha} label="Fecha" size="sm" />
      </FilterButton>
    );
  },
};
