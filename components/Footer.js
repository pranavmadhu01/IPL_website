import styles from "../styles/Footer.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import{
  HiOfficeBuilding
} from 'react-icons/hi'
function Social({ Logo, url }) {
  return (
    <a href={url} target="_blank_">
      <Logo className={styles.anchor_logo} />
    </a>
  );
}
const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footer_cont}>
        {/* <div className={styles.footer_title}>
          <span>Innovators Premier League</span>
        </div> */}
        <div className={styles.footer_address}>
          <p>
            <span><HiOfficeBuilding/>Thejaswini, G3B, Technopark Rd, <br/>Karyavattom, Thiruvananthapuram, Kerala 695581 </span>
            <span><AiFillPhone/>0471-2700270</span>
            <span><AiFillMail/>iedckerala@startupmission.in</span>
          </p>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.footer_social}>
        <div className={styles.social_icon}>
          <Social
            Logo={AiFillFacebook}
            url="https://www.facebook.com/keralastartupmission"
          />
        </div>
        <div className={styles.social_icon}>
          <Social
            Logo={AiFillInstagram}
            url="https://www.instagram.com/iedc_kerala/"
          />
        </div>
        <div className={styles.social_icon}>
          <Social
            Logo={AiFillLinkedin}
            url="https://www.linkedin.com/company/kerala-startup-mission/"
          />
        </div>
        <div className={styles.social_icon}>
          <Social
            Logo={AiFillTwitterCircle}
            url="https://twitter.com/startup_mission"
          />
        </div> 
      </div>
      
    </footer>
    <div className={styles.footer_copyright}>
    <small>
      Copyright © 2022 Kerala Startup Mission. All Rights Reserved.
    </small>
  </div>
  </>
  );
};
export default Footer;
