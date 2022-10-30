import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.css";
// import logo from "../public/assets/ksum.png";
import logo from "../public/assets/ipl_white.png";
import  {BiMenuAltRight}  from "react-icons/bi";
import {AiOutlineCloseSquare} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const nav =useRef(null);
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

  const handleMenuClick = (path)=>{
    handleCloseOPen()
    router.push(`#${[path]}`)
  }
  

  const handleCloseOPen = () => {
    if(nav!==null){
      nav.current.classList.toggle(styles.open);
      setShowMenu(!showMenu);
    }
  }


  return (
    <header className={scrollY ? styles.header : styles.header_active}>
      <div className={styles.nav_logo}>
      <Image
        src={logo}
        alt="kerala startup mission logo"
      />
      </div>
      <nav >
        <ul className={styles.header_nav_list} ref={nav}>
          {anchors.map((anchor) => (
            <li>
              <p onClick={()=>{handleMenuClick(anchor)}} className={styles.header_nav_list_anchor}>
                {anchor}
              </p>
            </li>
          ))}
          
        </ul>
        <div className={styles.mobile_menu_btn}>
          {showMenu?<AiOutlineCloseSquare onClick={handleCloseOPen} size={50} />:<BiMenuAltRight onClick={handleCloseOPen} size={50}/>}
        
        </div>

        
      </nav>


    </header>
  );
};
export default Header;
