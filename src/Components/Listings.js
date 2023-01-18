import React, { useState } from "react";

const Listings = (props) => {
  let data = props.data;
  const [quantity, setQuantity] = useState("1");

  const inputHandler = (e) => {
    setQuantity(e.target.value); // number of quantity
  };

  const addToCartHandler = () => {
    // to not duplicate the listing in the cart
    if (!props.cartData.includes(props.id)) props.push(props.index, quantity);
  };

  return (
    <div className="listing">
      <img src={data.image} alt="Men's T-Shirt" />
      <h2>{data.name}</h2>
      <p>£{data.price}</p>
      <p>Available Sizes: {data.sizes.map((x) => x + ", ")}</p>
      <p>Color: {data.color}</p>
      <div>
        <input
          type="number"
          id="number"
          defaultValue="1"
          min={1}
          onChange={inputHandler}
        />
        <button className="add-to-cart" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Listings;
