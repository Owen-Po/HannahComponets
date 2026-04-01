import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";

const tabs = [
  { key: "tab1", label: "Tab 1", content: <div>Content 1</div> },
  { key: "tab2", label: "Tab 2", content: <div>Content 2</div> },
  { key: "tab3", label: "Tab 3", disabled: true },
];

describe("Tabs", () => {
  it("renders all tabs", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 3" })).toBeInTheDocument();
  });

  it("shows first tab content by default", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("switches tab on click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs tabs={tabs} onChange={onChange} />);
    await user.click(screen.getByRole("tab", { name: "Tab 2" }));
    expect(onChange).toHaveBeenCalledWith("tab2");
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("disabled tab cannot be clicked", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole("tab", { name: "Tab 3" })).toBeDisabled();
  });

  it("sets aria-selected correctly", () => {
    render(<Tabs tabs={tabs} defaultKey="tab2" />);
    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("aria-selected", "false");
  });
});
