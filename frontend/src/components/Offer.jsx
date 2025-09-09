import Exclusive from "../assets/exclusive_image.png";
const Offer = () => {
  return (
    <div
      className="w-full xl:w-280 h-full lg:h-80 px-10 md:px-20
       flex items-center justify-between mx-auto
     mb-20 bg-gradient-to-b from-pink-100 to-white"
    >
      {/* left */}
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl">
          Exclusive
          <br /> Offer For You
        </h1>
        <p className="uppercase text-xs md:text-sm font-semibold my-2 md:my-5">
          Only on best sellers products
        </p>
        <button
          className="px-10 py-1 text-white text-sm font-semibold rounded-full bg-[#d93836]
         cursor-pointer hover:scale-105 transition-all duration-150"
        >
          Check Now
        </button>
      </div>
      {/* right */}
      <div className="size-50 md:size-80">
        <img
          className="w-full h-full object-contain"
          src={Exclusive}
          alt="Exclusive Offer"
        />
      </div>
    </div>
  );
};

export default Offer;
