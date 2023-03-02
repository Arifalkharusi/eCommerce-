import React from "react";
import style from "./Listings.module.css";

const Listings = ({ data, listIndex, index, openOverlay }) => {
  const selectedHandler = () => {
    listIndex(index);
    openOverlay(true);
  };

  return (
    <div className={style.listing} onClick={selectedHandler}>
      <img src={data.image} alt="Men's T-Shirt" />
      <div className={style.title}>{data.name}</div>
      <div className={style.price}>£{data.price}</div>
    </div>
  );
};

export default Listings;
