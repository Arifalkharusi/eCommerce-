import React from "react";

let open = false;

const Cart = (props) => {
  // open & closes cart
  const openCart = () => {
    !open ? (open = true) : (open = false);
    props.onOpenCart(open);
  };

  return (
    <div className="cart" onClick={openCart}>
      <i className="fa-solid fa-cart-shopping">
        {props.cartCount > 0 ? props.cartCount : null}
      </i>
    </div>
  );
};
export default Cart;
