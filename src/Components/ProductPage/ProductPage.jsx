import React, { useState } from "react";
import Product from "../Product/Product";
import Listings from "../Listings/Listings";
import style from "./ProductPage.module.css";
import recomended from "../../data/recomended.json";

const ProductPage = (props) => {
  const [move, setMove] = useState(0);

  const sliderHandler = (value) => {
    if (value === "left" && move > 0) setMove(move - 1);
    if (value === "right" && move < recomended.length - 5) setMove(move + 1);
  };

  return (
    <div>
      <Product />
      <div className={style.recom}>
        <div className={style.recomtitle}>WE THINK YOU'LL LIKE</div>
        <div className={style.recomline}></div>
      </div>
      <div className={style.slider}>
        <button direction="left" onClick={() => sliderHandler("left")}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <div style={{ transform: `translateX(-${move * 220}px)` }}>
          {recomended.map((x, i) => (
            <Listings data={x} key={x.id} i={i} />
          ))}
        </div>
        <button direction="right" onClick={() => sliderHandler("right")}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
