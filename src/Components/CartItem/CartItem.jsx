import React from "react";
import style from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, openEdit } from "../../store/cartSlice";

const CartItem = (props) => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={style.cartitems}>
        {cartItems.length > 0 ? (
          cartItems.map((x, i) => (
            <div className={style.cartlisting}>
              <div className={style.item}>
                <img src={x.image} alt="" />
                <div className={style.listinfo}>
                  <div className={style.name}>{x.name}</div>
                  <div className={style.color}>
                    Color: <span>{x.selColor}</span>
                  </div>
                  <div className={style.size}>
                    Size: <span>{x.selSizes}</span>
                  </div>
                  <div
                    className={style.edit}
                    onClick={() => dispatch(openEdit(i))}
                  >
                    <i className="fa-solid fa-pencil"></i>
                    <span>Edit item</span>
                  </div>
                </div>
              </div>
              <div className={style.qty}>{x.quantity}</div>
              <div className={style.price}>£{x.price}</div>
              <div className={style.totalprice}>
                <div className={style.subtotal}>
                  £{(+x.price * +x.quantity).toFixed(2)}
                </div>
                <div
                  onClick={() => dispatch(removeFromCart(i))}
                  className={style.delete}
                >
                  <i className="fa-regular fa-trash-can"></i>{" "}
                  <span>Remove</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Add some products in the cart</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
