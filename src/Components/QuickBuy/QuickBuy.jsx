import React from "react";
import style from "./QuickBuy.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../store/itemSlice";
import Product from "../Product/Product";

const ViewListings = (props) => {
  const { index } = useSelector((state) => state.itemSlice);
  const dispatch = useDispatch();

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <i
          className={`${style.close} fa-solid fa-xmark`}
          onClick={() => dispatch(setItem({ index, open: false }))}
        ></i>
        <Product />
      </div>
    </div>
  );
};

export default ViewListings;
