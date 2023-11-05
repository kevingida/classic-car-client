"use client";
import React, { useEffect, useRef, useState } from "react";
import Style from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const listLink = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "For Sale",
      url: "/cars/for-sale",
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
    },
    {
      id: 4,
      title: "Sold Car",
      url: "/cars/sold",
    },
    {
      id: 5,
      title: "About",
      url: "/about",
    },
    {
      id: 6,
      title: "Contact",
      url: "/contact",
    },
  ];

  const [colour, setColour] = useState<String>("transparent");
  const [active, setActive] = useState(false);

  const showNavbar = () => {
    setActive(!active);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setColour("#000814");
      } else {
        setColour("transparent");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <header
      className={Style.navbar} /*style={{ backgroundColor: `${colour}` }}*/
    >
      <Link href="/">
        {/* <Image
          src="/Logo.svg"
          alt="Classic car logo"
          width={600}
          height={400}
          className={Style.navbar__logo}
        /> */}
        <h3>LOGO</h3>
      </Link>
      <nav
        className={`${active ? Style.navbar__responsive : ""} 
        ${Style.navbar__list}`}
      >
        {listLink.map((navigation) => (
          <Link
            key={navigation.id}
            href={navigation.url}
            className={Style.navbar__list__item}
            onClick={showNavbar}
          >
            {navigation.title}
          </Link>
        ))}
        <button
          className={`${Style.navbar__btn} ${Style.navbar__btn_close}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={Style.navbar__btn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );

  // return (
  //   <nav className={navbar.navbar} /*style={{ backgroundColor: `${colour}` }}*/>
  //     <div className={navbar.navbar__container}>
  //       <h1 className={navbar.navbar__logo}>LOGO</h1>
  //       <button
  //         onClick={() => setActive(!active)}
  //         className={navbar.navbar__btn}
  //       >
  //         <FaBars className={navbar.navbar__btn__menu} />
  //       </button>
  //       <div
  //         className={`${navbar.nav__elements}  ${active && "active"}`}
  //         style={active ? { display: "inline-block" } : { display: "none" }}
  //       >
  //         <ul>
  //           {listLink.map((navigation) => (
  //             <Link
  //               key={navigation.id}
  //               href={navigation.url}
  //               className={navbar.navbar__list__item}
  //             >
  //               {navigation.title}
  //             </Link>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

{
}
