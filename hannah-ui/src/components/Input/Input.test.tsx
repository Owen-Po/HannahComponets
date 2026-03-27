import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles user typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    await user.type(input, "hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
  });

  it("applies error status classes", () => {
    render(<Input status="error" placeholder="Error" />);
    const input = screen.getByPlaceholderText("Error");
    expect(input.className).toContain("border-red");
  });

  it("renders left element", () => {
    render(<Input leftElement={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("applies success status classes", () => {
    render(<Input status="success" placeholder="Success" />);
    const input = screen.getByPlaceholderText("Success");
    expect(input.className).toContain("border-emerald");
  });
});
