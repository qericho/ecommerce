const ReUsableCard = ({ item, key }) => {
  return (
    <div key={key} className="w-50 lg:w-60 px-2">
      <div className="w-full h-60 lg:h-70">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt="popularimg"
        />
      </div>
      <div className="w-full">
        <p className="text-sm">{item.name}</p>
        <div className="flex items-center gap-x-5">
          <p className="text-sm font-semibold text-black">${item.new_price}</p>
          <p className="line-through text-sm font-semibold text-gray-500">
            ${item.old_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReUsableCard;
