import React from "react";
import style from "./Checkout.module.css";
import EditListings from "../EditListings/EditListings";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const { cartItems, edit } = useSelector((state) => state.cartSlice);

  let total = 0;
  // adds up the total
  cartItems.forEach((x) => (total += +x.price * +x.quantity));

  return (
    <div className={style.checkout}>
      {edit && <EditListings />}
      <div className={style.cartitem}>
        <div className={style.banner}>
          <div>ITEM</div>
          <div>QTY</div>
          <div>PRICE</div>
          <div className={style.totaltag}>TOTAL PRICE</div>
        </div>
        <CartItem />
      </div>
      <div className={style.botcheckout}>
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
