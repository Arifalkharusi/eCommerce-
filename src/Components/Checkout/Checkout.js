import React, { useState } from "react";
import style from "./Checkout.module.css";
import EditListings from "../EditListings/EditListings";

const Checkout = ({ checkoutData, onDeleteItem, editFunc }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [openItem, setOpenItem] = useState(false);
  // deltes items from cart
  const deleteItemHandler = (index) => {
    onDeleteItem(index);
  };
  const edit = (index) => {
    setSelectedItem(index);
    setOpenItem(true);
  };

  const closeEdit = (boolean) => {
    setOpenItem(boolean);
  };

  const comfirmEdit = (obj) => {
    editFunc(obj, selectedItem);
    setOpenItem(false);
  };

  let total = 0;
  // adds up the total
  checkoutData.forEach((x) => (total += +x.price * +x.quantity));

  return (
    <div className={style.checkout}>
      {openItem && (
        <EditListings
          data={checkoutData[selectedItem]}
          closeOverlay={closeEdit}
          hello={comfirmEdit}
        />
      )}
      <div className={style.cartitem}>
        <div className={style.banner}>
          <div>ITEM</div>
          <div>QTY</div>
          <div>PRICE</div>
          <div className={style.totaltag}>TOTAL PRICE</div>
        </div>
        <div className={style.cartitems}>
          {checkoutData.length > 0 ? (
            checkoutData.map((x, i) => (
              <div className={style.cartlisting}>
                <div className={style.item}>
                  <img src={x.image} />
                  <div className={style.listinfo}>
                    <div className={style.name}>{x.name}</div>
                    <div className={style.color}>
                      Color: <span>{x.selColor}</span>
                    </div>
                    <div className={style.size}>
                      Size: <span>{x.selSizes}</span>
                    </div>
                    <div className={style.edit} onClick={() => edit(i)}>
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
                    onClick={() => deleteItemHandler(i)}
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
