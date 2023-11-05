import Link from "next/link";
import React from "react";
import Style from "./Category.module.css";

const Category = () => {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div className={Style.items_container}>
          <Link className={Style.item} href="/contact">
            <p>SHOWROOM</p>
          </Link>
        </div>
        <div className={Style.items_container}>
          <Link className={Style.item} href="/cars/for-sale">
            <p>CARS FOR SALE</p>
          </Link>
        </div>
        <div className={Style.items_container}>
          <Link className={Style.item} href="/cars/sold">
            <p>SOLD CARS</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
