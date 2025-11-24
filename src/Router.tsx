import { createBrowserRouter, type RouteObject } from "react-router";
import Home from "./pages/Home";
import App from "./App";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "blog", Component: Blog }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
