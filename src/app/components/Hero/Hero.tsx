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
    <div className={Style.container}>
      <div className={Style.content}>
        <h2>{heading} </h2>
        <p>{message}</p>
        <Link className={Style.button} href="/cars/for-sale">
          Our Collection
        </Link>
      </div>
    </div>
  );
}

export default Hero;
