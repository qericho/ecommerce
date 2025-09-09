import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Shop", path: "/" },
    { name: "Men", path: "/mens" },
    { name: "Women", path: "/womens" },
    { name: "Kids", path: "/kids" },
  ];

  return (
    <footer className="w-full border-t border-gray-100 mt-20 bg-gray-50">
      <div className="max-w-[1120px] mx-auto px-5 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-y-0">
        {/* Logo + Brand */}
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

        {/* Footer Menu */}
        <ul className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-red-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-sm text-gray-600 font-medium">Contact us</p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:shopper@example.com"
              className="text-gray-600 hover:text-red-600 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bottom */}
      <div className="text-xs text-gray-500 text-center py-4 border-t border-gray-200">
        <p>© {new Date().getFullYear()} Shopper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
