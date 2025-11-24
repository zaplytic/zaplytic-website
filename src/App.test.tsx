import { suite, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderElemWithRouter, renderPathWithRouter } from "test-setup";
import App from "./App";

suite("App.tsx", () => {
  test("App should render a main tag", () => {
    renderElemWithRouter(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  test("Route '/' must contain App", () => {
    renderPathWithRouter();
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  test("App should contain header", () => {
    renderElemWithRouter(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("Route '/' must contain the homepage", () => {
    renderPathWithRouter();
    expect(screen.getByTestId("homepage")).toBeInTheDocument();
  });

  test("App should contain footer", () => {
    renderElemWithRouter(<App />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
