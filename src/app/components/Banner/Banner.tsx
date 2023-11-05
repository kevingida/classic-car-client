import React from "react";
import Style from "./Banner.module.css";

type props = {
  header: String;
};

function Banner({ header }: props) {
  return (
    <section className={Style.banner}>
      <h1 className={Style.banner__title}>{header}</h1>
    </section>
  );
}

export default Banner;
