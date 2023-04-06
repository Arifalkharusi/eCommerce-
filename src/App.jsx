import React, { useState } from "react";
// Components
import Checkout from "./Components/Checkout/Checkout";
import Listings from "./Components/Listings/Listings";
import ViewListings from "./Components/ViewListings/ViewListings";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Filter from "./Components/Filter/Filter";
// Routes
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // states
  const [cartData, setCartData] = useState([]);
  // const [fitlerListing, setFitlerListing] = useState(data);
  const { index, boolean } = useSelector((state) => state.selectItem);
  const { items } = useSelector((state) => state.dataSlice);

  // adds to cart
  const pushToCart = (obj, id) => {
    setCartData((prev) => [...prev, obj]);
  };
  // deletes from carts
  const deleteCartItem = (index) => {
    cartData.splice(index, 1);
    setCartData((prev) => [...prev]);
  };

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
          <Listings data={x} key={x.id} id={x.id} index={i} />
        ))}
      </div>
    </>
  );

  return (
    <div className="wrapper-main">
      <div className="container">
        <Header data={cartData} />
        <div className="header"></div>
        {boolean && (
          <ViewListings data={items[index]} pushToCart={pushToCart} />
        )}
        <Routes>
          <Route path="/" element={mainElelment} />
          <Route
            path="/cart"
            element={
              <Checkout
                checkoutData={cartData}
                onDeleteItem={deleteCartItem}
                editFunc={editItem}
              />
            }
          />
        </Routes>
        <div className="footer"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
