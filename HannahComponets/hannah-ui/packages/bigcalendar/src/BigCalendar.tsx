import { useState, useCallback, type ReactNode } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  type Event,
  type View,
  type SlotInfo,
} from "react-big-calendar";
import withDragAndDrop, {
  type EventInteractionArgs,
} from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale/es";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

/* ─── Localizer ─── */
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales: { es },
});

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar);

const messages = {
  today: "Hoy",
  previous: "Anterior",
  next: "Siguiente",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  allDay: "Todo el día",
  noEventsInRange: "No hay eventos en este rango.",
  showMore: (count: number) => `+${count} más`,
};

/* ─── Types ─── */
export interface CalendarEvent extends Event {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
  textColor?: string;
  description?: string;
  meta?: Record<string, unknown>;
}

export interface SlotSelection {
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface BigCalendarProps {
  events: CalendarEvent[];
  defaultView?: View;
  defaultDate?: Date;
  minHeight?: string;
  selectable?: boolean;
  draggable?: boolean;
  className?: string;
  onSelectEvent?: (event: CalendarEvent) => void;
  onSelectSlot?: (slotInfo: SlotInfo) => void;
  onEventDrop?: (args: { event: CalendarEvent; start: Date; end: Date }) => void;
  onEventResize?: (args: { event: CalendarEvent; start: Date; end: Date }) => void;
  renderSlotModal?: (props: {
    isOpen: boolean;
    onClose: () => void;
    slot: SlotSelection;
  }) => ReactNode;
}

/* ─── Component ─── */
export const BigCalendar = ({
  events,
  defaultView = "month",
  defaultDate,
  minHeight = "600px",
  selectable = true,
  draggable = true,
  className,
  onSelectEvent,
  onSelectSlot,
  onEventDrop,
  onEventResize,
  renderSlotModal,
}: BigCalendarProps) => {
  const [view, setView] = useState<View>(defaultView);
  const [date, setDate] = useState<Date>(defaultDate ?? new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [slotInfo, setSlotInfo] = useState<SlotSelection | null>(null);

  const handleSelectSlot = useCallback(
    (slot: SlotInfo) => {
      if (renderSlotModal) {
        setSlotInfo({ start: slot.start, end: slot.end, allDay: slot.action === "select" });
        setModalOpen(true);
      }
      onSelectSlot?.(slot);
    },
    [renderSlotModal, onSelectSlot],
  );

  return (
    <div className={cn("min-h-[600px] w-full", className)} style={{ minHeight }}>
      <DnDCalendar
        localizer={localizer}
        events={events}
        view={view}
        date={date}
        onView={setView}
        onNavigate={(d) => setDate(d)}
        views={["month", "week", "day", "agenda"]}
        step={30}
        min={new Date(1970, 0, 1, 7, 0, 0)}
        max={new Date(1970, 0, 1, 20, 0, 0)}
        selectable={selectable}
        popup
        messages={messages}
        culture="es"
        formats={{
          timeGutterFormat: "HH:mm",
          dayHeaderFormat: (d: Date) => format(d, "EEEE dd 'de' MMMM", { locale: es }),
          dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) =>
            `${format(start, "dd MMM", { locale: es })} – ${format(end, "dd MMM yyyy", { locale: es })}`,
          agendaDateFormat: (d: Date) => format(d, "EEE dd/MM", { locale: es }),
        }}
        eventPropGetter={(event: CalendarEvent) => ({
          style: {
            backgroundColor: event.color ?? "#b45309",
            color: event.textColor ?? "#fff",
            borderRadius: "4px",
            border: "none",
            padding: "2px 6px",
            fontSize: "0.75rem",
            fontWeight: 500,
          },
        })}
        onSelectEvent={onSelectEvent}
        onSelectSlot={handleSelectSlot}
        draggableAccessor={() => draggable}
        resizable={draggable}
        onEventDrop={
          onEventDrop
            ? ({ event, start, end }: EventInteractionArgs<CalendarEvent>) =>
                onEventDrop({ event, start: start as Date, end: end as Date })
            : undefined
        }
        onEventResize={
          onEventResize
            ? ({ event, start, end }: EventInteractionArgs<CalendarEvent>) =>
                onEventResize({ event, start: start as Date, end: end as Date })
            : undefined
        }
        style={{ height: "100%" }}
      />

      {renderSlotModal && slotInfo && renderSlotModal({
        isOpen: modalOpen,
        onClose: () => setModalOpen(false),
        slot: slotInfo,
      })}
    </div>
  );
};
