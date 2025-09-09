import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ReUsableCard from "../components/cards/ReUsableCard";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div>
      <div className="w-full h-full my-2 md:my-5">
        <img
          className="w-full h-full object-contain"
          src={props.banner}
          alt="banner"
        />
      </div>
      <div>
        <div className="flex justify-between items-center px-5 xl:px-30 py-10">
          <p className="text-sm font-semibold">
            {" "}
            Showing 1-12 out of 36 products
          </p>
          <p className="text-sm font-semibold cursor-pointer">sort by</p>
        </div>
        <div className="mx-auto w-full xl:w-250 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts
            .filter((p) => p.category === props.category)
            .map((p) => (
              <ReUsableCard key={p.id} item={p} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
