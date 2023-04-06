import React from "react";
import style from "./Listings.module.css";
import { useDispatch } from "react-redux";
import { setItem } from "../../store/itemSlice";

const Listings = ({ data, index }) => {
  const dispatch = useDispatch();
  // const selectedHandler = () => {
  //   listIndex(index);
  //   openOverlay(true);
  // };

  return (
    <div
      className={style.listing}
      onClick={() => dispatch(setItem({ index: index, open: true }))}
    >
      <img src={data.image} alt="Men's T-Shirt" />
      <div className={style.title}>{data.name}</div>
      <div className={style.price}>£{data.price}</div>
    </div>
  );
};

export default Listings;
