import styles from "../styles/Hero.module.css";
import ipllogo from "../public/assets/ipl.png";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Hero = () => {

  const control = useAnimation()
  const [ref, inView] = useInView()

  const Variant = {
    visible:{opacity:1,y:0, transition: { duration: 1 }},
    hidden:{opacity: 0,y:-50}
  }
  const Variant2 = {
    visible:{opacity:1, transition: { duration: 1 }},
    hidden:{opacity: 0}
  }
  const Variant3 = {
    visible:{opacity:1,y:0, transition: { duration: 1 }},
    hidden:{opacity: 0,y:50}
  }
  const Variant4 = {
    visible:{opacity:1,scale:1, transition: { duration: 1 }},
    hidden:{opacity: 0,scale:0}
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <>
      <div className={styles.hero_wrapper} id="home">
        <motion.div 
          className="hero-img"
          ref={ref}
          variants={Variant4}
          initial="hidden"
          animate={control}  
        >
          <Image src={ipllogo} width="550px" height="350px" />
        </motion.div>
        <motion.p   
          ref={ref}
          variants={Variant}
          initial="hidden"
          animate={control} 
          className={styles.hero_title}
        > 
          INNOVATORS' PREMIER LEAGUE 
        </motion.p>
        <motion.p   
          ref={ref}
          variants={Variant2}
          initial="hidden"
          animate={control} 
          className={styles.hero_tag}
        > 
          <span>Compete</span> | <span>Collaborate</span> | <span>Celebrate</span>
        </motion.p>
        <motion.p   
          ref={ref}
          variants={Variant3}
          initial="hidden"
          animate={control} 
          className={styles.hero_date}
        > 
          26 October 2022 - 14 February 2023
        </motion.p>
      </div>
      
    </>
  );
};
export default Hero;
