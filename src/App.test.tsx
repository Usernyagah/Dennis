import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the homepage with name and View Services button", () => {
    render(<App />);

    expect(screen.getByText("Dennis Nyagah")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view services/i })
    ).toBeInTheDocument();
  });
});