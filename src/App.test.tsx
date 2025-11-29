import { suite, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderElemWithRouter, renderPathWithRouter } from "test-setup";
import App from "./App";

suite("App.tsx", () => {
  test("App should render a main tag", async () => {
    renderElemWithRouter(<App />);
    expect(await screen.findByTestId("app")).toBeInTheDocument();
  });

  test("Route '/' must contain App", async () => {
    renderPathWithRouter();
    expect(await screen.findByTestId("app")).toBeInTheDocument();
  });

  test("App should contain header", async () => {
    renderElemWithRouter(<App />);
    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  test("Route '/' must contain the homepage", async () => {
    renderPathWithRouter();
    expect(await screen.findByTestId("homepage")).toBeInTheDocument();
  });

  test("App should contain footer", async () => {
    renderElemWithRouter(<App />);
    expect(await screen.findByRole("contentinfo")).toBeInTheDocument();
  });
});
