import { useState } from "react";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Shop", path: "/", key: "shop" },
    { name: "Men", path: "/mens", key: "men" },
    { name: "Women", path: "/womens", key: "women" },
    { name: "Kids", path: "/kids", key: "kids" },
  ];

  const activeKey =
    menuItems.find((item) => item.path === location.pathname)?.key || "";

  return (
    <header className="w-full flex items-center justify-between px-5 md:px-20 py-8 border-b border-gray-100 relative">
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex items-center gap-x-2">
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

      {/* Desktop Menu */}
      <ul className="lg:flex hidden items-center gap-x-10 text-sm text-gray-500 font-semibold">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link to={item.path} className="cursor-pointer">
              {item.name}
              {activeKey === item.key && (
                <hr className="h-[2px] bg-red-600 border-none rounded-full mt-2" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-5 md:gap-x-8 text-gray-500">
        <Link to={"/login"}>
          <button className="hidden lg:flex text-sm font-semibold px-5 py-1 rounded-full border border-gray-400 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <div className="w-6 relative">
            <img
              className="w-full h-full object-cover"
              src={Cart}
              alt="cart-logo"
            />
            <div className="absolute -top-2 -right-2 size-5 flex items-center justify-center bg-red-500 text-white text-[10px] rounded-full font-bold">
              1
            </div>
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <span
          className="cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            // Menu Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-600 font-semibold">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.name}
                  {activeKey === item.key && (
                    <hr className="h-[2px] bg-red-600 border-none rounded-full mt-2" />
                  )}
                </Link>
              </li>
            ))}
            <Link to={"/login"} onClick={() => setMenuOpen(false)}>
              <button className="text-sm font-semibold px-5 py-1 rounded-full border border-gray-400 cursor-pointer">
                Login
              </button>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
