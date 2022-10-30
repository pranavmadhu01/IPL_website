import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Header.module.css";
import ksumlogo from "../public/assets/ksum.png";
import logo from "../public/assets/ipl_white.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  const anchors = [
    "home",
    "about",
    "programs",
    "timeline",
    // "ambassedors",
    // "awards",
    // "leaderborad",
    "references",
    "throwbacks",
    "contacts",
  ];
  const [scrollY, setScrollY] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownActive, setDropdownAcitve] = useState(false);
  const router = useRouter();
  const nav = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollY(false);
      } else {
        setScrollY(true);
      }
    };
    // if(window.innerWidth>968){
    handleScroll();
    // }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (path, index) => {
    handleCloseOPen(index);
    router.push(`#${[path]}`);
  };

  const handleCloseOPen = (index) => {
    if (nav !== null && index !== 5) {
      nav.current.classList.toggle(styles.open);
      setShowMenu(!showMenu);
    }
  };

  return (
    <header className={scrollY ? styles.header : styles.header_active}>
      <div className={styles.header_logo_wrapper}>
        <div className={styles.nav_logo}>
          <Image src={logo} alt="kerala startup mission logo"/>
        </div>
      </div>
      <nav>
        <ul className={styles.header_nav_list} ref={nav}>
          {anchors.map((anchor, index) => (
            <li className={dropdownActive && index === 5 && styles.dropdown_active}>
              <p
                onClick={() => {
                  handleMenuClick(anchor, index);
                  index === 5 && setDropdownAcitve(!dropdownActive);
                }}
                className={styles.header_nav_list_anchor}
              >
                {anchor}
                {index === 5 && <IoMdArrowDropdown />}
                {dropdownActive && index === 5 && (
                  <div className={styles.header_dropdown}>
                    <a
                      href="https://ipl.startupmission.in/1.0/"
                      target="_blank_"
                    >
                      IPL 1.0
                    </a>
                  </div>
                )}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.mobile_menu_btn}>
          {showMenu ? (
            <AiOutlineCloseSquare onClick={handleCloseOPen} size={50} />
          ) : (
            <BiMenuAltRight onClick={handleCloseOPen} size={50} />
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
