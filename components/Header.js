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
    <header className={styles.header}>
      <Image
        src={logo}
        alt="kerala startup mission logo"
        width="80px"
        height="80px"
      />
      <nav>
        <ul className={styles.header_nav_list}>
          {anchors.map((anchor) => (
            <li>
              <a
                href={`#${anchor}`}
                className={
                  scrollY
                    ? styles.header_nav_list_anchor
                    : styles.header_nav_list_anchor_active
                }
              >
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
