import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import App from "./App";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "blog", Component: Blog }
    ]
  }
])

export default router;
