import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Mens_Banner from "./assets/banner_mens.png";
import Womens_Banner from "./assets/banner_women.png";
import Kids_Banner from "./assets/banner_kids.png";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="mens"
            element={<ShopCategory banner={Mens_Banner} category={"men"} />}
          />
          <Route
            path="womens"
            element={<ShopCategory banner={Womens_Banner} category={"women"} />}
          />
          <Route
            path="kids"
            element={<ShopCategory banner={Kids_Banner} category={"kid"} />}
          />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
