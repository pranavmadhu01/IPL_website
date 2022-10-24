import styles from "../styles/Footer.module.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
function Social({ Logo, url }) {
  return (
    <a href={url} target="_blank_">
      <Logo className={styles.anchor_logo} />
    </a>
  );
}
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_title}>
        <span>Innovators Premier League</span>
      </div>
      <div className={styles.footer_address}>
        <p>
          Thejaswini, G3B, Technopark Rd, Karyavattom, Thiruvananthapuram,
          Kerala 695581
        </p>
        <span>0471-2700270</span>
        <span>iedckerala@startupmission.in</span>
      </div>
      <div className={styles.footer_social}>
        <Social
          Logo={AiOutlineFacebook}
          url="https://www.facebook.com/keralastartupmission"
        />
        <Social
          Logo={AiOutlineInstagram}
          url="https://www.instagram.com/iedc_kerala/"
        />
        <Social
          Logo={AiOutlineLinkedin}
          url="https://www.linkedin.com/company/kerala-startup-mission/"
        />
        <Social
          Logo={AiOutlineTwitter}
          url="https://twitter.com/startup_mission"
        />
      </div>
      <div className={styles.footer_copyright}>
        <small>
          Copyright © 2022 Kerala Startup Mission. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};
export default Footer;
