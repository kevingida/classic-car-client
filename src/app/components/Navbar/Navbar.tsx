"use client";
import React, { useEffect, useState } from "react";
import navbar from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

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
    <nav className={navbar.container} style={{ backgroundColor: `${colour}` }}>
      <div className={navbar.content}>
        <div className={navbar.link}>
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="Classic car logo"
              width={600}
              height={400}
              className={navbar.image}
            />
          </Link>
        </div>
        <div className={navbar.web_list}>
          {listLink.map((navigation) => (
            <Link key={navigation.id} href={navigation.url}>
              {navigation.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
