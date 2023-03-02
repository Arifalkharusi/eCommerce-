import React, { useState } from "react";
import data from "./data/data.json"; // listing data
// Components
import Checkout from "./Components/Checkout/Checkout";
import Listings from "./Components/Listings/Listings";
import ViewListings from "./Components/ViewListings/ViewListings";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Filter from "./Components/Filter/Filter";
// Routes
import { Routes, Route } from "react-router-dom";

function App() {
  // states
  const [cartData, setCartData] = useState([]);
  const [idHolder, setIdHolder] = useState([]);
  const [fitlerListing, setFitlerListing] = useState(data);
  const [selectedItem, setSelectedItem] = useState(0);
  const [openItem, setOpenItem] = useState(false);

  // adds to cart
  const pushToCart = (obj, id) => {
    setCartData((prev) => [...prev, obj]);
    setIdHolder((prev) => [...prev, id]);
  };
  // deletes from carts
  const deleteCartItem = (index) => {
    cartData.splice(index, 1);
    idHolder.splice(index, 1);
    setCartData((prev) => [...prev]);
    setIdHolder((prev) => [...prev]);
  };

  // recieves the filtered data
  const filterHandler = (arr) => {
    setFitlerListing(arr);
  };

  const listIndex = (index) => {
    setSelectedItem(index);
  };

  const displayOverlay = (boolean) => {
    setOpenItem(boolean);
  };

  const editItem = (obj, index) => {
    cartData[index] = obj;
    setCartData((prev) => [...prev]);
  };

  const mainElelment = (
    <>
      <Filter mainData={fitlerListing} onFilter={filterHandler} />
      <h3>{fitlerListing.length} Product(s) found</h3>
      <div className="listings">
        {fitlerListing.map((x, i) => (
          <Listings
            data={x}
            key={x.id}
            id={x.id}
            index={i}
            openOverlay={displayOverlay}
            listIndex={listIndex}
            cartData={idHolder}
          />
        ))}
      </div>
    </>
  );

  return (
    <div className="wrapper-main">
      <div className="container">
        <Header data={cartData} />
        <div className="header"></div>
        {openItem && (
          <ViewListings
            data={fitlerListing[selectedItem]}
            closeOverlay={displayOverlay}
            pushToCart={pushToCart}
          />
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
