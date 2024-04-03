import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Devices from "./Pages/Devices";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import BackToTopButton from "./Components/BackToTop/BackToTopButton";
import Footer from "./Components/Footer";
import ProductDisplay from "./Pages/ProductDisplay";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
function App() {
  return (
    <div className="">
      <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/devices" element={<Devices/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<ContactUs/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/products/:id" element={<ProductDisplay/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/wishlist" element={<Wishlist/>}/>
</Routes>
<BackToTopButton/>
<Footer/>
    </div>
  );
}

export default App;
