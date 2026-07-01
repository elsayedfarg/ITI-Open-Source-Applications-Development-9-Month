import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { productsLoader } from "./loaders/AppLoader";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/products",
    element: <App />,
    loader: productsLoader,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>,
);
