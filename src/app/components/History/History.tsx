import Link from "next/link";
import Image from "next/image";
import React from "react";
import Style from "./History.module.css";

type props = {
  heading1: String;
  message: String;
};

function History({ heading1, message }: props) {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div className={Style.title}>
          <p>{heading1}</p>
        </div>
        <div className={Style.message}>
          <p>{message}</p>
        </div>
        <Link className={Style.button} href="/ABOPUT">
          MORE ABOUT US
        </Link>
        <Image
          src="/image1.png"
          alt="classic car"
          width={600}
          height={400}
          className={Style.image}
        />
      </div>
    </div>
  );
}

export default History;
