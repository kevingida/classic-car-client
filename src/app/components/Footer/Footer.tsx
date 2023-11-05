import Link from "next/link";
import Image from "next/image";
import React from "react";
import Style from "./Footer.module.css";
import { ST } from "next/dist/shared/lib/utils";

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footer__brand}>
        <Link href="/" className={Style.footer__brand__link}>
          <Image
            src="/Logo.svg"
            alt="Classic car logo"
            width={600}
            height={400}
            className={Style.footer__brand__logo}
          />
        </Link>
        <p>Scoutvägen 25 26193 Saxtorp Sverige</p>
        <p>marketing@Classiccarsdealer.com</p>
        <p>+44 1344 620072</p>
      </div>
      <nav className={Style.footer__nav}>
        <h3 className={Style.footer__nav__title}>navigate</h3>
        <ul className={Style.footer__nav__link}>
          <Link href="/cars/for-sale"> For Sale </Link>
          <Link href="/services"> Services </Link>
          <Link href="/cars/sold"> Sold Car </Link>
        </ul>
        <h3 className={Style.footer__nav__title}>company</h3>
        <ul className={Style.footer__nav__link}>
          <Link href="/about"> About </Link>
          <Link href="/contact"> Contact </Link>
        </ul>
      </nav>
      <hr className={Style.line} />
      <section className={Style.footer__social_media}>
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
      </section>
      <p className={Style.footer__copyright}>
        © 2023 Classic Car Dealer. Registered Company Number: 01234567. Site by
        Kevin Gida
      </p>
    </footer>
  );
};
