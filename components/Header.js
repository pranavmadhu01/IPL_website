import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
// import logo from "../public/assets/ksum.png";
import logo from "../public/assets/ipl2.png";
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
      if (window.scrollY > 300) {
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
      <div className={styles.nav_logo}>
      <Image
        src={logo}
        alt="kerala startup mission logo"
      />
      </div>
      <nav>
        <ul className={styles.header_nav_list}>
          {anchors.map((anchor) => (
            <li>
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
