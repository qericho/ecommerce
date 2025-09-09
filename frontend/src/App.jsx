import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<ShopCategory />} />
          <Route path="womens" element={<ShopCategory />} />
          <Route path="kids" element={<ShopCategory />} />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
