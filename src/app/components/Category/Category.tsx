import Link from "next/link";
import React from "react";
import Style from "./Category.module.css";

const Category = () => {
  return (
    <section className={Style.category}>
      <div className={Style.category__item__container}>
        <Link className={Style.category__item} href="/contact">
          <p>SHOWROOM</p>
        </Link>
      </div>
      <div className={Style.category__item__container}>
        <Link className={Style.category__item} href="/cars/for-sale">
          <p>CARS FOR SALE</p>
        </Link>
      </div>
      <div className={Style.category__item__container}>
        <Link className={Style.category__item} href="/cars/sold">
          <p>SOLD CARS</p>
        </Link>
      </div>
    </section>
  );
};

export default Category;
