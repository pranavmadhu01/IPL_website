import styles from "../styles/Hero.module.css";
import ipllogo from "../public/assets/ipl.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.hero_wrapper}>
      <Image src={ipllogo} width="550px" height="350px" />
    </div>
  );
};
export default Hero;
