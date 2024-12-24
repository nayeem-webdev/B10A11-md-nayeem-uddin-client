import { useState } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ products, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(1000); // Default price range
  const [sortOrder, setSortOrder] = useState(""); // Sorting order: "" | "asc" | "desc"

  const handleSearch = () => {
    let filteredProducts = products.filter(
      (product) =>
        product.foodName.toLowerCase().includes(searchText.toLowerCase()) &&
        product.price <= priceRange
    );

    // Apply sorting
    if (sortOrder === "asc") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    onFilter(filteredProducts);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto space-y-4">
      {/* Search Box */}
      <div>
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price Range Filter */}
      <div>
        <label
          htmlFor="priceRange"
          className="block text-sm font-semibold text-gray-700"
        >
          Max Price: ${priceRange}
        </label>
        <input
          id="priceRange"
          type="range"
          min="0"
          max="2000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Sort By Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sort by Price
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setSortOrder("asc");
              handleSearch();
            }}
            className={`px-4 py-2 rounded-md ${
              sortOrder === "asc"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Low to High
          </button>
          <button
            onClick={() => {
              setSortOrder("desc");
              handleSearch();
            }}
            className={`px-4 py-2 rounded-md ${
              sortOrder === "desc"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            High to Low
          </button>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="text-center">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      foodName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
