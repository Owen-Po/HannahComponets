import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BigCalendar, type CalendarEvent } from "./BigCalendar";

const mockEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Reunión de equipo",
    start: new Date(2026, 3, 9, 10, 0),
    end: new Date(2026, 3, 9, 11, 0),
  },
];

describe("BigCalendar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BigCalendar events={mockEvents} defaultDate={new Date(2026, 3, 9)} />
    );
    expect(container.querySelector(".rbc-calendar")).toBeInTheDocument();
  });

  it("displays navigation buttons in Spanish", () => {
    render(<BigCalendar events={[]} defaultDate={new Date(2026, 3, 9)} />);
    expect(screen.getByText("Hoy")).toBeInTheDocument();
  });

  it("renders events", () => {
    render(<BigCalendar events={mockEvents} defaultDate={new Date(2026, 3, 9)} />);
    expect(screen.getByText("Reunión de equipo")).toBeInTheDocument();
  });

  it("calls onSelectEvent when an event is clicked", async () => {
    const handleSelect = vi.fn();
    render(
      <BigCalendar
        events={mockEvents}
        defaultDate={new Date(2026, 3, 9)}
        onSelectEvent={handleSelect}
      />
    );
    const eventEl = screen.getByText("Reunión de equipo");
    eventEl.click();
    expect(handleSelect).toHaveBeenCalledOnce();
  });

  it("applies custom className", () => {
    const { container } = render(
      <BigCalendar events={[]} className="my-custom-class" />
    );
    expect(container.firstChild).toHaveClass("my-custom-class");
  });
});
