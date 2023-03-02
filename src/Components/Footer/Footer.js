import React from "react";
import style from "./Footer.module.css";

const Footer = (props) => {
  const img =
    "https://www.boohooman.com/on/demandware.static/-/Library-Sites-boohooman-content-global/default/dw72d9e1ef/images/payment-method-icons/NEW_PAYMENT_UK-DESK2.svg";

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.topsection}>
          <form>
            <div> GET EXCLUSIVE OFFERS AND UPDATES</div>
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <button type="submit">SUBMIT</button>
          </form>
          <div className={style.icons}>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <div className={style.botsection}>
          <div>COPYRIGHT © 2023 E-COMERCE.COM. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
