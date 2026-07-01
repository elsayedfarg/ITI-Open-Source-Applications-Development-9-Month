import { useSearchParams } from "react-router";

const ProductFilter = ({ filter, setFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (c) => {
    setFilter(c);
    setSearchParams({ category: c });
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6 mt-6">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-3 py-1 border rounded-md ${
            filter === "all" ? "bg-black text-white" : ""
          }`}
        >
          All
        </button>

        <button
          onClick={() => handleFilterChange("electronics")}
          className={`px-3 py-1 border rounded-md ${
            filter === "electronics" ? "bg-black text-white" : ""
          }`}
        >
          Electronics
        </button>

        <button
          onClick={() => handleFilterChange("jewelery")}
          className={`px-3 py-1 border rounded-md ${
            filter === "jewelery" ? "bg-black text-white" : ""
          }`}
        >
          Jewelry
        </button>
      </div>
    </>
  );
};

export default ProductFilter;
