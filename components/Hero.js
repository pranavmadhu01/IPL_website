import styles from "../styles/Hero.module.css";
import ipllogo from "../public/assets/ipl2.png";
import Image from "next/image";



const Hero = () => {

  return (
    <>
      <div className={styles.hero_wrapper} id="home">
        <div className="hero-img">
          <Image src={ipllogo} />
        </div>
        <p className={styles.hero_title}>Innovators' Premier League </p>
        <div className={styles.hero_tag}> 
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Compete
          </p>
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Collaborate
          </p>
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Celebrate
          </p>
        </div>
        <p className={styles.hero_date}> 26 Oct 2022 - 14 Feb 2023</p>
      </div>
      
    </>
  );
};
export default Hero;
