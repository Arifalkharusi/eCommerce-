import React, { useEffect } from "react";
import style from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../store/itemSlice";
import { addToCart } from "../../store/cartSlice";
import { cartItem, setSelect } from "../../store/cartItemSlice";

const Product = (props) => {
  const { cartData, select } = useSelector((state) => state.cartItemSlice);
  const { items } = useSelector((state) => state.dataSlice);
  const { index } = useSelector((state) => state.itemSlice);
  const dispatch = useDispatch();

  const data = items[index];
  const selectText = "Please Select";
  useEffect(() => {
    dispatch(
      cartItem({
        ...data,
        selColor: selectText,
        selSizes: selectText,
        quantity: 1,
      })
    );
  }, [dispatch, data]);

  const addCart = (e) => {
    e.preventDefault();

    if (cartData.selColor !== selectText && cartData.selSizes !== selectText) {
      dispatch(addToCart(cartData));
      dispatch(setItem({ index, open: false }));
    } else {
      dispatch(setSelect());
    }
  };

  const selectedColor = (index, e) => {
    if (e.target.classList.contains(style.color)) {
      e.target.parentElement.parentElement.childNodes.forEach((x) =>
        x.classList.remove(style.selected)
      );
      e.target.parentElement.classList.add(style.selected);
      dispatch(cartItem({ ...cartData, selColor: data.color[index] }));
    }
  };

  const selectedSize = (index, e) => {
    if (e.target.classList.contains(style.size)) {
      e.target.parentElement.parentElement.childNodes.forEach((x) =>
        x.classList.remove(style.selected)
      );
      e.target.parentElement.classList.add(style.selected);
      dispatch(cartItem({ ...cartData, selSizes: data.sizes[index] }));
    }
  };
  return (
    <div className={style.main}>
      <div className={style.leftsec}>
        <img src={data.image} alt="" />
      </div>
      <div className={style.rightsec}>
        <div className={style.name}>{data.name}</div>
        <div className={style.price}>£{data.price}</div>
        <div className={style.colortag}>
          COLOR: <span>{cartData.selColor}</span>
        </div>
        <div className={style.colorselector}>
          {data.color.map((x, i) => (
            <div
              className={style.selectwrapper}
              onClick={(e) => selectedColor(i, e)}
            >
              <div
                className={style.color}
                style={{ background: `${x.toLowerCase()}` }}
              ></div>
            </div>
          ))}
        </div>
        <div className={style.sizetag}>
          SIZE: <span>{cartData.selSizes}</span>
        </div>
        <div className={style.sizeselector}>
          {data.sizes.map((x, i) => (
            <div
              className={style.selectwrapper}
              onClick={(e) => selectedSize(i, e)}
            >
              <div className={style.size}>{x}</div>
            </div>
          ))}
        </div>
        <form onSubmit={addCart}>
          <div className={style.quantity}>
            <div>QUANTITY</div>
            <input
              type="number"
              min={1}
              max={10}
              value={cartData.quantity}
              onChange={(e) =>
                dispatch(cartItem({ ...cartData, quantity: e.target.value }))
              }
            ></input>
          </div>
          <button type="submit">ADD TO CART</button>
        </form>
        {select && (
          <div className={style.auth}>*Please select color and size!*</div>
        )}
      </div>
    </div>
  );
};

export default Product;
