import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../public/assets/ksum.png";
import Image from "next/image";
const Header = () => {
  const anchors = [
    "home",
    "timeline",
    // "ambassedors",
    // "awards",
    // "leaderborad",
    // "resources",
    "contact",
  ];
  const [scrollY, setScrollY] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollY(false);
      } else {
        setScrollY(true);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrollY ? styles.header : styles.header_active}>
      <Image
        src={logo}
        alt="kerala startup mission logo"
        width="80px"
        height="80px"
      />
      <nav>
        <ul className={styles.header_nav_list}>
          {anchors.map((index,anchor) => (
            <li key={index}>
              <a href={`#${anchor}`} className={styles.header_nav_list_anchor}>
                {anchor}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
