// import React from "react";
import { productsLoader } from "./loaders/AppLoader";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await productsLoader();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Products</h1>

      {products.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </>
  );
};

export default App;
