import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <div className="wrapper">
          <Navbar cart={cart} setData={setData} />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<Product cart={cart} setCart={setCart} items={data} />}
              />
              <Route
                path="/product/:id"
                element={<ProductDetail cart={cart} setCart={setCart} />}
              />
              <Route
                path="/search/:term"
                element={<SearchItem cart={cart} setCart={setCart} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
