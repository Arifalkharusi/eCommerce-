import React from "react";
import style from "./Listings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../store/itemSlice";
import { Link } from "react-router-dom";

const Listings = ({ data, i }) => {
  const dispatch = useDispatch();
  const { index } = useSelector((state) => state.itemSlice);
  const { items } = useSelector((state) => state.dataSlice);

  const selectHandler = () => {
    dispatch(setItem({ index: i, open: false }));
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.listing}>
      <Link
        className={style.link}
        to={`/product/${items[index].name}`}
        onClick={selectHandler}
      >
        <div className={style.listing}>
          <img src={data.image} alt="Men's T-Shirt" />

          <div className={style.title}>{data.name}</div>
          <div className={style.price}>£{data.price}</div>
        </div>
      </Link>
      <div
        className={style.quickbuy}
        onClick={() => dispatch(setItem({ index: i, open: true }))}
      >
        QUICK BUY
      </div>
    </div>
  );
};

export default Listings;
