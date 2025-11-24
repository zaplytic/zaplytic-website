import "@testing-library/jest-dom/vitest";
import { render, cleanup, type RenderOptions } from "@testing-library/react";
import { afterEach } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "./src/Router";
import type { ReactElement, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
afterEach(cleanup);

interface RenderWithRouterOptions extends Omit<RenderOptions, "wrapper"> {
  initialEntries?: string[];
  initialIndex?: number;
}

/**
 * Renders the full app with all routes (Integration test)
 * @param options - Router configuration options
 * @returns Render result from testing-library
 *
 * @example
 * // Test home page
 * renderApp();
 *
 * // Test products page
 * renderApp({ initialEntries: ['/products'] });
 */
export function renderPathWithRouter({
  initialEntries = ["/"],
  initialIndex = 0,
  ...renderOptions
}: RenderWithRouterOptions = {}) {
  const testRouter = createMemoryRouter(routes, {
    initialEntries,
    initialIndex
  });

  return render(<RouterProvider router={testRouter} />, renderOptions);
}

interface RenderWithRouterComponentOptions extends Omit<RenderOptions, "wrapper"> {
  initialEntries?: string[];
  initialIndex?: number;
  children?: ReactNode;
}

/**
 * Renders a specific component within router context (Unit/Component test)
 * @param ui - Component to render
 * @param options - Router configuration and optional children for Outlet
 * @returns Render result from testing-library
 *
 * @example
 * // Test App component with mock child
 * renderWithRouter(<App />, {
 *   children: <div>Mock Child</div>
 * });
 *
 * // Test Header component
 * renderWithRouter(<Header />);
 */
export function renderElemWithRouter(
  ui: ReactElement,
  {
    initialEntries = ["/"],
    initialIndex = 0,
    children,
    ...renderOptions
  }: RenderWithRouterComponentOptions = {}
) {
  const testRoutes = [
    {
      path: "/",
      element: ui,
      children: children ? [{ index: true, element: children }] : undefined
    }
  ];

  const testRouter = createMemoryRouter(testRoutes, {
    initialEntries,
    initialIndex
  });

  return render(<RouterProvider router={testRouter} />, renderOptions);
}
