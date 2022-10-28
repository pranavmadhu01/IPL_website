import styles from "../styles/Hero.module.css";
import ipllogo from "../public/assets/ipl.png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_wrapper} id="home">
        <div className="hero-img">
          <Image src={ipllogo} width="550px" height="350px" />
        </div>
        <p className={styles.hero_title}>INNOVATORS' PREMIER LEAGUE</p>
        <p className={styles.hero_tag}><span>Compete</span> | <span>Collaborate</span> | <span>Celebrate</span></p>
        <p className={styles.hero_date}>26 October 2022 - 14 February 2023</p>
      </div>
      
    </>
  );
};
export default Hero;
