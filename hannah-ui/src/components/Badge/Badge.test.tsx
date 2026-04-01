import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders with text content", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success").className).toContain("bg-emerald");
  });

  it("applies size classes", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large").className).toContain("text-sm");
  });

  it("renders dot indicator when dot is true", () => {
    const { container } = render(<Badge dot>With dot</Badge>);
    const dot = container.querySelector(".rounded-full");
    expect(dot).toBeInTheDocument();
  });
});
