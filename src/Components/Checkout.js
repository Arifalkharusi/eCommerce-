import React from "react";

const Checkout = (props) => {
  // deltes items from cart
  const deleteItemHandler = (index) => {
    props.onDeleteItem(index);
  };

  let total = 0;
  // adds up the total
  props.checkoutData.forEach((x, i) => (total += x.price * props.quanity[i]));

  return (
    <div className="checkout">
      <div className="cart-item">
        {props.checkoutData.length > 0 ? (
          props.checkoutData.map((x, i) => (
            <div className="cart-listing">
              <button onClick={() => deleteItemHandler(i)}>
                <i className="fa-regular fa-trash-can"></i>
              </button>
              <h1>{x.name}</h1>
              <h5>{x.price}</h5>
              <div>
                <label>Quantity:</label>
                <p>{props.quanity[i]}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Add some products in the cart</p>
        )}
      </div>
      <div className="bot-checkout">
        <div>
          <h1>SUBTOTAL</h1>
          <h1>£{total.toFixed(2)}</h1>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Checkout;
