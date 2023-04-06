import React, { useState } from "react";
// Components
import Checkout from "./Components/Checkout/Checkout";
import Listings from "./Components/Listings/Listings";
import QuickBuy from "./Components/QuickBuy/QuickBuy";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Filter from "./Components/Filter/Filter";
// Routes
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // states
  const [cartData, setCartData] = useState([]);
  const { index, open } = useSelector((state) => state.itemSlice);
  const { items } = useSelector((state) => state.dataSlice);

  const editItem = (obj, index) => {
    cartData[index] = obj;
    setCartData((prev) => [...prev]);
  };

  const mainElelment = (
    <>
      <Filter />
      <h3>{items.length} Product(s) found</h3>
      <div className="listings">
        {items.map((x, i) => (
          <Listings data={x} key={x.id} index={i} />
        ))}
      </div>
    </>
  );

  return (
    <div className="wrapper-main">
      <div className="container">
        <Header />
        <div className="header"></div>
        {open && <QuickBuy data={items[index]} />}
        <Routes>
          <Route path="/" element={mainElelment} />
          <Route path="/cart" element={<Checkout editFunc={editItem} />} />
        </Routes>
        <div className="footer"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
