import styles from "../styles/Header.module.css";
import logo from "../public/assets/ksum.png";
import Image from "next/image";
const Header = () => {
  const anchors = [
    "home",
    "timeline",
    "ambassedors",
    "awards",
    "leaderborad",
    "resources",
    "contact",
  ];
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
