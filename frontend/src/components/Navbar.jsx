import Logo from "../assets/logo.png";
import Cart from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const menuItems = [
    { name: "Shop", path: "/", key: "shop" },
    { name: "Men", path: "/mens", key: "men" },
    { name: "Women", path: "/womens", key: "women" },
    { name: "Kids", path: "/kids", key: "kids" },
  ];

  return (
    <header className="w-full flex items-center justify-between px-5 md:px-20 py-8 border-b border-gray-100">
      {/* Logo */}
      <Link to={"/"}>
        <div
          onClick={() => setMenu("shop")}
          className="flex items-center gap-x-2"
        >
          <div className="w-10">
            <img
              className="w-full h-full object-cover"
              src={Logo}
              alt="Shopper-Logo"
            />
          </div>
          <p className="uppercase text-xl font-bold">Shopper</p>
        </div>
      </Link>

      {/* Menu */}
      <ul className="lg:flex hidden flex items-center gap-x-10 text-sm text-gray-500 font-semibold">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link
              to={item.path}
              className="cursor-pointer"
              onClick={() => setMenu(item.key)}
            >
              {item.name}
              {menu === item.key && (
                <hr className="h-[2px] bg-red-600 border-none rounded-full mt-2" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side Login/Cart */}
      <div className="flex items-center gap-3 md:gap-x-8 text-gray-500">
        <Link to={"/login"}>
          <button className="text-sm font-semibold px-5 py-1 rounded-full border border-gray-400 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <div onClick={() => setMenu("")} className="w-7 relative">
            <img
              className="w-full h-full object-cover"
              src={Cart}
              alt="cart-logo"
            />
            <div className="absolute top-[-8px] right-[-10px] size-5 flex items-center justify-center bg-red-500 text-white text-[10px] rounded-full font-bold">
              1
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
