import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role alert", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders title and children", () => {
    render(<Alert title="Warning">Something happened</Alert>);
    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Alert variant="danger">Error</Alert>);
    expect(screen.getByRole("alert").className).toContain("bg-red");
  });

  it("shows dismiss button when dismissible", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert dismissible onDismiss={onDismiss}>Dismissible</Alert>);
    const btn = screen.getByLabelText("Cerrar");
    await user.click(btn);
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
