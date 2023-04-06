import React from "react";
import style from "./Header.module.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
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
            <Cart cartCount={data.length} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
