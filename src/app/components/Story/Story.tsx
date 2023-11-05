import Link from "next/link";
import Image from "next/image";
import React from "react";
import Style from "./Story.module.css";

type props = {
  heading1: String;
  message: String;
};

function Story({ heading1, message }: props) {
  return (
    <section className={Style.story}>
      <h2 className={Style.story__title}>{heading1}</h2>
      <p className={Style.story__message}>{message}</p>
      <Link className={Style.story__btn} href="/ABOPUT">
        MORE ABOUT US
      </Link>
      <Image
        src="/image1.png"
        alt="classic car"
        width={600}
        height={400}
        className={Style.story__img}
      />
    </section>
  );
}

export default Story;
