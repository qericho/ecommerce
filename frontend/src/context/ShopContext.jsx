import { createContext } from "react";
import allProducts from "../assets/all_product";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const contextValue = { allProducts };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
