import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { cartItems } = useSelector((state) => state.cartSlice);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link className={style.links} to="/">
            <h1>E-comerce.com</h1>
          </Link>
        </div>
        <div className={style.icons}>
          <Link className={style.links} to="/cart">
            <div className={style.cart}>
              <i className="fa-solid fa-cart-shopping"></i>
              <div>{cartItems.length > 0 ? cartItems.length : null}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
