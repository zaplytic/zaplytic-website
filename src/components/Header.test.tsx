import { suite, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderPathWithRouter } from "test-setup";

suite("Navigation", () => {
  test("header logo link should refer to Homepage", async () => {
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

  const navLinks = [
    { name: /^blog$/i, testId: "blogindex" },
    { name: /^products$/i, testId: "productspage" },
    { name: /^home$/i, testId: "homepage" }
  ];

  test("navlinks should navigate to the correct page and have active styles", async () => {
    const user = userEvent.setup();
    renderPathWithRouter();

    for (const { name, testId } of navLinks) {
      const link = screen.getByRole("link", { name });
      await user.click(link);

      await screen.findByTestId(testId);

      expect(screen.getByTestId(testId)).toBeInTheDocument();
      expect(link).toHaveClass("activeNav");
      expect(link).toHaveAttribute("aria-current", "page");
    }
  });
});
