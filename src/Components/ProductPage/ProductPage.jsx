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
    if (value === "right" && move < recomended.length - 5) setMove(move + 1);
  };

  const recomended = [
    {
      id: 1,
      name: "Oversized Half Sleeve Graphic T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34714_ecru_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 2,
      name: "Tall Oversized Half Sleeve Graphic T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm36161_ecru_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 3,
      name: "Tall Oversized Faux Layer Embroidered T-sh/irt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm36154_ecru_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 4,
      name: "Oversized Back Graphic T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34716_ecru_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 5,
      name: "Oversized Half Sleeve Graphic T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34715_grey%20marl_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 6,
      name: "Tall Oversized Half Sleeve Graphic T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm36155_grey%20marl_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "L", "XL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 7,
      name: "Oversized Faux Layer Embroidered T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34721_grey%20marl_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 8,
      name: "Oversized Contrast Stitch Slogan T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34719_navy_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "S", "L", "XL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 9,
      name: "Oversized Faux Layer Embroidered T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34720_ecru_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["S", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
    {
      id: 10,
      name: "Oversized Teddy Graphic Ringer T-shirt",
      image:
        "https://media.boohooman.com/i/boohooman/bmm34710_pink_xl?$product_image_category_page_2x$&fmt=webp",
      price: "12.60",
      sizes: ["XS", "M", "L", "XL", "XXL"],
      color: ["Black", "Grey", "Navy", "Blue", "Brown"],
    },
  ];

  return (
    <div>
      <Product />
      <div className={style.recom}>
        <div className={style.recomtitle}>WE THINK YOU'LL LIKE</div>
        <div className={style.recomline}></div>
      </div>
      <div className={style.div}>
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
