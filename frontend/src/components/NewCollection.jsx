import ReUsableCard from "./cards/ReUsableCard";
import new_collections from "../assets/new_collections";
const NewCollection = () => {
  return (
    <div className="w-full h-full">
      <div className="w-100 mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold">New Collection</h1>
        <hr className="w-40 md:w-50 h-0 mx-auto mt-3 bg-black rounded-full" />
      </div>
      {/* New Collection Container */}
      <div
        className="w-full h-full xl:w-250 mx-auto grid place-items-center
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 mb-32"
      >
        {new_collections.map((p) => {
          return <ReUsableCard item={p} key={p.id} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
