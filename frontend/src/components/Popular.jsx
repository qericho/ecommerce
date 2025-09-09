import data_product from "../assets/data";
import ReUsableCard from "./cards/ReUsableCard";
const Popular = () => {
  return (
    <div className="w-full h-full pb-32">
      <div className="w-100 mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Popular in women</h1>
        <hr className="w-50 md:w-60 h-0 mx-auto mt-3 bg-black rounded-full" />
      </div>
      <div
        className="w-full h-full xl:w-280 mx-auto
      grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {data_product.map((p) => {
          return <ReUsableCard item={p} key={p.id} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
