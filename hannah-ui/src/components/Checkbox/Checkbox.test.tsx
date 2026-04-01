import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept terms" id="terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("toggles when clicked (uncontrolled)", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Toggle" id="toggle" />);
    const cb = screen.getByRole("checkbox");
    expect(cb).not.toBeChecked();
    await user.click(cb);
    expect(cb).toBeChecked();
  });

  it("calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Check" id="check" onChange={onChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Checkbox label="Disabled" id="dis" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("renders description", () => {
    render(<Checkbox label="Opt" id="opt" description="Optional field" />);
    expect(screen.getByText("Optional field")).toBeInTheDocument();
  });
});
