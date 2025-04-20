import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders with children and icon", () => {
    const mockRefresh = vi.fn();

    render(<Button handleRefresh={mockRefresh}>Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.getByAltText("Refresh icon")).toBeInTheDocument();
  });

  it("calls handleRefresh when clicked", () => {
    const mockRefresh = vi.fn();

    render(<Button handleRefresh={mockRefresh}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));

    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });
});
