import React from "react";
// Components
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
// Routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper-main">
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
