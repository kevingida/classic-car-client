import Link from "next/link";
import Image from "next/image";
import React from "react";
import Style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={Style.container}>
      <div className={Style.content}>
        <div className={Style.upper}>
          <div className={Style.detail}>
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Classic car logo"
                width={600}
                height={400}
                className={Style.logo}
              />
            </Link>
            <div>Scoutvägen 25 26193 Saxtorp Sverige</div>
            <div>
              <div>marketing@Classiccarsdealer.com</div>
              <div>+44 1344 620072</div>
            </div>
          </div>
          <div className={Style.navigation}>
            <div className={Style.inner}>
              <h3>navigate</h3>
              <ul>
                <Link href="/cars/for-sale"> For Sale </Link>
                <Link href="/services"> Services </Link>
                <Link href="/cars/sold"> Sold Car </Link>
              </ul>
            </div>
            <div className={Style.inner}>
              <h3>company</h3>
              <ul>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className={Style.line} />
        <div className={Style.bottom}>
          <p>
            © 2023 Classic Car Dealer. Registered Company Number: 01234567.
            Site by Kevin Gida
          </p>
          <div className={Style.social}>
            <Link href="https://www.instagram.com/">
              <Image
                src="/icons8-instagram-old-50.png"
                alt="instagram page"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/icons8-facebook-50.png"
                alt="facebook page"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
