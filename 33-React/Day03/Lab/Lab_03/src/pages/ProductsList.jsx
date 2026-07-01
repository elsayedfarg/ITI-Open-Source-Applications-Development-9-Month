import ProductCard from "@/components/LogicalComponents/ProductCard";
import ProductFilter from "@/components/LogicalComponents/ProductFilter";
import { useLoaderData, useSearchParams } from "react-router";
import { useState } from "react";

const ProductsList = () => {
  const products = useLoaderData();
  const [filter, setFilter] = useState("all");
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const headingText =
    categoryFromUrl && categoryFromUrl !== "all"
      ? `Currently Browsing: ${categoryFromUrl}`
      : "All Products";

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{headingText}</h1>

      <ProductFilter filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
