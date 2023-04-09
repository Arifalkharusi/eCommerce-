import React from "react";
// Components
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";
import { useSelector } from "react-redux";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import QuickBuy from "./Components/QuickBuy/QuickBuy";
// Routes
import { Routes, Route } from "react-router-dom";

function App() {
  const { open } = useSelector((state) => state.itemSlice);
  return (
    <div className="wrapper-main">
      {open && <QuickBuy />}
      <div className="container">
        <Header />
        <div className="header"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/*" element={<ProductPage />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
