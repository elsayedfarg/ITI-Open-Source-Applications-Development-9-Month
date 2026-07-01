// import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ProductsList from "./pages/ProductsList";
import Cart from "./pages/Cart";
import NotFound from "./components/LogicalComponents/NotFound";
import ProductDetails from "./pages/ProductDetails";
import { ProductsLoader } from "./loaders/ProductsLoader";
import { ProductDetailsLoader } from "./loaders/ProductDetailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // Home page (default)
        index: true,
        element: <ProductsList />,
        loader: ProductsLoader,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ProductDetailsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
