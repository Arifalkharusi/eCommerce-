import React, { useState } from "react";
import Product from "../Product/Product";
import Listings from "../Listings/Listings";
import style from "./ProductPage.module.css";
import { useSelector } from "react-redux";

const ProductPage = (props) => {
  const { items } = useSelector((state) => state.dataSlice);
  const [move, setMove] = useState(0);

  const sliderHandler = (value) => {
    if (value === "left" && move > 0) setMove(move - 1);
    if (value === "right" && move < 2) setMove(move + 1);
  };

  return (
    <div>
      <Product />
      <div>Products you might like...</div>
      <div className={style.div}>
        <button direction="left" onClick={() => sliderHandler("left")}>
          &lt;
        </button>
        <div style={{ transform: `translateX(-${move * 100}%)` }}>
          {items.map((x, i) => {
            if (i > 10) return;
            return <Listings data={x} key={x.id} i={i} />;
          })}
        </div>
        <button direction="right" onClick={() => sliderHandler("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
