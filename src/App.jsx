import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Blog from "./pages/Blog.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Footer from "./common/Footer.jsx";
import { useSelector } from "react-redux";
function App() {
  const cartItems = useSelector((state) => state.cart.data);

  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/about" element={<AboutUs></AboutUs>}></Route>

        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
