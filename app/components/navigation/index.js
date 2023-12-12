"use client";
import React, { useEffect, useState } from "react";
import navbarStyles from "./navbar.module.css";
import Image from "next/image";
import logoImage from "../../../public/assets/logo.png";
import WhiteSearchIcon from "@/public/assets/WhiteSearchIcon";
import NotificationIcon from "@/public/assets/NotificationIcon";
import CaretUp from "@/public/assets/CaretUp";
import Searchbar from "../searchbar/Searchbar";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${navbarStyles.navbar} ${
        isSticky ? navbarStyles.sticky : ""
      }`}
    >
      <div className={navbarStyles.logoContainer}>
        <a href='#' className={navbarStyles.logo}>
          <Image
            src={logoImage}
            width={115}
            alt='logo'
            className={navbarStyles.logo}
          />
        </a>
      </div>
      <div className={navbarStyles.navbarItemsContainer}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>TV Shows</a>
          </li>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>News & Popular</a>
          </li>
          <li>
            <a href='#'>My List</a>
          </li>
          <li>
            <a href='#'>Browse by Languages</a>
          </li>
        </ul>
      </div>
      <div className={navbarStyles.searchbarContainer}>
        <ul>
          <li>
            <a href='#'>
              <Searchbar show={false} />
            </a>
          </li>
          <li>
            <a href='#'>Children</a>
          </li>
          <li>
            <a href='#'>
              <NotificationIcon />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image
                src='https://ik.imagekit.io/emfpexdmyc/netflix-clone/profile/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI_C9Raq1rJ1.png'
                width={32}
                height={32}
                style={{ borderRadius: "5px" }}
                objectFit='cover'
                alt='Godfather'
              />
            </a>
          </li>
          <CaretUp className={navbarStyles.caret} />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
