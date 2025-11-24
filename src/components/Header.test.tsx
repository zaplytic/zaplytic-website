import { suite, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderPathWithRouter } from "test-setup";

suite("Navigation", () => {
  test("header logo link and Home link should point to Homepage", async () => {
    const user = userEvent.setup();
    renderPathWithRouter();
    const logoLink = screen.getByLabelText("Zaplytic");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    await user.click(logoLink);
    const navHomeLink = screen.getByText("Home");
    expect(navHomeLink).toHaveAttribute("href", "/");

    expect(navHomeLink).toHaveClass("activeNav");

    expect(screen.getByTestId("homepage")).toBeInTheDocument();
  });

  test("");
});
