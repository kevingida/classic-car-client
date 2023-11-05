import React from "react";
import Style from "./Hero.module.css";
import Link from "next/link";
import { type } from "os";

type props = {
  heading: String;
  message: String;
};

function Hero({ heading, message }: props) {
  return (
    <section className={Style.hero}>
      <h1 className={Style.hero__title}>{heading} </h1>
      <p className={Style.hero__slogan}>{message}</p>
      <Link className={Style.hero__btn} href="/cars/for-sale">
        Our Collection
      </Link>
    </section>
  );
}

export default Hero;
