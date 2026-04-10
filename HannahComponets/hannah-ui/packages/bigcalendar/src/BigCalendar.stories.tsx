import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BigCalendar, type CalendarEvent } from "./BigCalendar";

/* ─────────────────────────────────────────
   Sample data
───────────────────────────────────────── */
const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Reunión de equipo",
    start: new Date(y, m, d, 10, 0),
    end: new Date(y, m, d, 11, 30),
    color: "#2563eb",
  },
  {
    id: "2",
    title: "Almuerzo",
    start: new Date(y, m, d, 13, 0),
    end: new Date(y, m, d, 14, 0),
    color: "#16a34a",
  },
  {
    id: "3",
    title: "Sprint Review",
    start: new Date(y, m, d + 1, 15, 0),
    end: new Date(y, m, d + 1, 16, 0),
    color: "#b45309",
  },
  {
    id: "4",
    title: "Deploy a producción",
    start: new Date(y, m, d + 2, 9, 0),
    end: new Date(y, m, d + 2, 9, 30),
    color: "#dc2626",
  },
  {
    id: "5",
    title: "Diseño UI/UX",
    start: new Date(y, m, d - 1, 14, 0),
    end: new Date(y, m, d - 1, 16, 0),
    color: "#7c3aed",
  },
];

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof BigCalendar> = {
  title: "Components/BigCalendar",
  component: BigCalendar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Calendario interactivo basado en react-big-calendar con localización en español, soporte drag & drop, vistas mes/semana/día/agenda, y slot modal personalizable vía render prop.",
      },
    },
  },
  argTypes: {
    defaultView: {
      control: "select",
      options: ["month", "week", "day", "agenda"],
      description: "Vista inicial del calendario",
      table: {
        category: "Configuración",
        defaultValue: { summary: "month" },
        type: { summary: '"month" | "week" | "day" | "agenda"' },
      },
    },
    selectable: {
      control: "boolean",
      description: "Permite seleccionar slots de tiempo",
      table: { category: "Configuración", defaultValue: { summary: "true" } },
    },
    draggable: {
      control: "boolean",
      description: "Habilita drag & drop y resize de eventos",
      table: { category: "Configuración", defaultValue: { summary: "true" } },
    },
    minHeight: {
      control: "text",
      description: "Altura mínima del contenedor",
      table: { category: "Estilo", defaultValue: { summary: "600px" } },
    },
    className: {
      control: "text",
      description: "Clases CSS adicionales",
      table: { category: "Estilo" },
    },
    onSelectEvent: { action: "selectEvent", table: { category: "Eventos" } },
    onSelectSlot: { action: "selectSlot", table: { category: "Eventos" } },
    onEventDrop: { action: "eventDrop", table: { category: "Eventos" } },
    onEventResize: { action: "eventResize", table: { category: "Eventos" } },
    renderSlotModal: { table: { disable: true } },
    events: { table: { disable: true } },
    defaultDate: { table: { disable: true } },
  },
  args: {
    events: sampleEvents,
    defaultView: "month",
    selectable: true,
    draggable: true,
    minHeight: "600px",
  },
};

export default meta;
type Story = StoryObj<typeof BigCalendar>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */

/** Modifica todos los controles del panel para explorar combinaciones */
export const Playground: Story = {
  render: (args) => {
    const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

    const handleEventDrop = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, start, end } : e)),
      );
    };

    const handleEventResize = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, start, end } : e)),
      );
    };

    return (
      <BigCalendar
        {...args}
        events={events}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
      />
    );
  },
};

/* ─────────────────────────────────────────
   Vistas
───────────────────────────────────────── */

export const MonthView: Story = {
  name: "View · Month",
  args: { defaultView: "month" },
};

export const WeekView: Story = {
  name: "View · Week",
  args: { defaultView: "week" },
};

export const DayView: Story = {
  name: "View · Day",
  args: { defaultView: "day" },
};

export const AgendaView: Story = {
  name: "View · Agenda",
  args: { defaultView: "agenda" },
};

/* ─────────────────────────────────────────
   Drag & Drop
───────────────────────────────────────── */

export const Draggable: Story = {
  name: "Draggable",
  args: { draggable: true, defaultView: "week" },
  render: (args) => {
    const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

    const handleEventDrop = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, start, end } : e)),
      );
    };

    const handleEventResize = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, start, end } : e)),
      );
    };

    return (
      <BigCalendar
        {...args}
        events={events}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
      />
    );
  },
};

/* ─────────────────────────────────────────
   Sin eventos
───────────────────────────────────────── */

export const Empty: Story = {
  name: "Empty · No events",
  args: { events: [] },
};

/* ─────────────────────────────────────────
   Con modal personalizado
───────────────────────────────────────── */

export const WithSlotModal: Story = {
  name: "With Slot Modal",
  args: {
    defaultView: "week",
    renderSlotModal: ({ isOpen, onClose, slot }) =>
      isOpen ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.4)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: 24,
              minWidth: 300,
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            <h3 style={{ margin: "0 0 8px" }}>Nuevo evento</h3>
            <p style={{ fontSize: 14, color: "#666" }}>
              {slot.start.toLocaleString("es")} – {slot.end.toLocaleString("es")}
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 16,
                padding: "6px 16px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null,
  },
};
