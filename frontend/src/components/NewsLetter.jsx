const NewsLetter = () => {
  return (
    <div className="w-full h-full xl:w-280 mx-auto mb-20 py-20 bg-gradient-to-b from-pink-100 to-white">
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-center my-5 font-semibold">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="max-w-100 md:max-w-150 mx-auto border flex rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full px-4 py-2 md:py-3 outline-none"
        />
        <button className="bg-black text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-black/90 cursor-pointer transition-colors duration-150">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
