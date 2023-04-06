import React, { useState } from "react";
import style from "./EditListings.module.css";

const EditListings = ({ data, closeOverlay, hello }) => {
  const [color, setColor] = useState(``);
  const [size, setSize] = useState(``);
  const [qty, setQty] = useState(data.quantity);
  const [selected, setSelected] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    if (color !== `` && size !== ``) {
      let obj = {
        image: data.image,
        name: data.name,
        color: data.color,
        selColor: color,
        selSizes: size,
        sizes: data.sizes,
        price: data.price,
        quantity: qty,
      };
      hello(obj);
      closeOverlay(false);
    } else {
      setSelected(true);
    }
  };

  const exitOverlay = () => {
    closeOverlay(false);
  };

  const selectedColor = (index, e) => {
    if (e.target.classList.contains(style.color)) {
      e.target.parentElement.parentElement.childNodes.forEach((x) =>
        x.classList.remove(style.selected)
      );
      e.target.parentElement.classList.add(style.selected);
      setColor(data.color[index]);
      setSelected(false);
    }
  };

  const selectedSize = (index, e) => {
    if (e.target.classList.contains(style.size)) {
      e.target.parentElement.parentElement.childNodes.forEach((x) =>
        x.classList.remove(style.selected)
      );
      e.target.parentElement.classList.add(style.selected);
      setSize(data.sizes[index]);
      setSelected(false);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <div className={style.main}>
          <i
            className={`${style.close} fa-solid fa-xmark`}
            onClick={exitOverlay}
          ></i>
          <div className={style.leftsec}>
            <img src={data.image} alt="" />
          </div>
          <div className={style.rightsec}>
            <div className={style.name}>{data.name}</div>
            <div className={style.price}>£{data.price}</div>
            <div className={style.colortag}>
              COLOR: <span>{color}</span>
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
              SIZE: <span>{size}</span>
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
            <form onSubmit={addToCart}>
              <div className={style.quantity}>
                <div>QUANTITY</div>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                ></input>
              </div>
              <button type="submit">UPDATE CART</button>
            </form>
            {selected && (
              <div className={style.auth}>*Please select color and size!*</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditListings;
