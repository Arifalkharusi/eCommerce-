import React from "react";

const Cart = (props) => {
  // open & closes cart
  return (
    <div className="cart">
      <i className="fa-solid fa-cart-shopping">
        {props.cartCount > 0 ? props.cartCount : null}
      </i>
    </div>
  );
};
export default Cart;
