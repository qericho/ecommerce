import { useContext, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import ReUsableCard from "../components/cards/ReUsableCard";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("");

  // filter products by category
  const filteredProducts = useMemo(() => {
    return allProducts.filter((item) => item.category === props.category);
  }, [allProducts, props.category]);

  // sort filtered products
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortOption) {
      case "az":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "low-high":
        products.sort((a, b) => a.new_price - b.new_price);
        break;
      case "high-low":
        products.sort((a, b) => b.new_price - a.new_price);
        break;
      default:
        break;
    }
    return products;
  }, [filteredProducts, sortOption]);

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-full my-2 md:my-5">
        <img
          className="w-full h-full object-contain"
          src={props.banner}
          alt="banner"
        />
      </div>

      {/* Header with dropdown */}
      <div>
        <div className="flex justify-between items-center px-5 xl:px-30 py-10">
          <p className="text-sm font-semibold">
            Showing 1-{Math.min(12, sortedProducts.length)} out of{" "}
            {sortedProducts.length} products
          </p>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-sm font-semibold cursor-pointer border rounded-md px-2 py-1 focus:outline-none"
          >
            <option value="">Sort by</option>
            <option value="az">A - Z</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product grid */}
        <div className="mx-auto w-full xl:w-250 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedProducts.slice(0, 12).map((item) => (
            <ReUsableCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
