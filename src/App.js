import React, { useState } from "react";

import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Filter from "./Components/Filter";
import Listings from "./Components/Listings";
import data from "./data/data.json"; // listing data

function App() {
  // states
  const [cartDataCount, setCartDataCount] = useState([]);
  const [idHolder, setIdHolder] = useState([]);
  const [openCart, setopenCart] = useState(false);
  const [fitlerListing, setFitlerListing] = useState(data);
  const [quantityArray, setQuantityArray] = useState([]);
  // adds to cart
  const pushToCart = (index, quantity) => {
    setCartDataCount((prev) => [...prev, fitlerListing[index]]);
    setIdHolder((prev) => [...prev, fitlerListing[index].id]);
    quantityArray.push(quantity);
    setQuantityArray((prev) => [...prev]);
  };
  // deletes from carts
  const deleteCartItem = (index) => {
    cartDataCount.splice(index, 1);
    idHolder.splice(index, 1);
    setCartDataCount((prev) => [...prev]);
    setIdHolder((prev) => [...prev]);
    quantityArray.splice(index, 1);
    setQuantityArray((prev) => [...prev]);
  };
  //opening and closing cart
  const openCartHandler = (val) => {
    setopenCart(val);
  };
  // recieves the filtered data
  const filterHandler = (arr) => {
    setFitlerListing(arr);
  };

  return (
    <div className="container">
      <Cart cartCount={cartDataCount.length} onOpenCart={openCartHandler} />
      {openCart ? (
        <Checkout
          checkoutData={cartDataCount}
          onDeleteItem={deleteCartItem}
          quanity={quantityArray}
        />
      ) : null}
      <Filter mainData={fitlerListing} onFilter={filterHandler} />
      <h3>{fitlerListing.length} Product(s) found</h3>
      <div className="listings">
        {fitlerListing.map((x, i) => (
          <Listings
            data={x}
            key={x.id}
            id={x.id}
            index={i}
            push={pushToCart}
            cartData={idHolder}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
