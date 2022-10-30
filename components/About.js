import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "../styles/About.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {

  const Variant = {
    visible:{opacity:1,x:0,scale:1, transition: { duration: 1 }},
    hidden:{opacity: 0,x:50,scale:.8}
  }

  const control = useAnimation()
  const [ref2, inView] = useInView()

  useEffect(() => {
    
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);


  
  return (
    <div className={styles.about_wrapper} id='about'>
      <motion.div  
        className={styles.about_content_wrapper}
        ref={ref2}
        variants={Variant}
        initial="hidden"
        animate={control} 
      >
        <h2 className={styles.about_content_wrapper_title}><span className={styles.head_underlin}>About</span> IPL</h2>
        <p className={styles.about_content_wrapper_content}  >
          Innovators' Premier League (IPL) is an initiative of the Kerala
          Startup Mission (KSUM) to bring out the best talents from the Kerala
          Innovation Hubs. IPL aims to bring awareness and sensitization of IEDC
          & its activities among students, building a competitive &
          entrepreneurial mindset among innovators, and create the pipeline of
          startups.
          <br></br><br/>
          During IPL, the students in the institution will
          compete with each other at the College level, followed by Regional
          level and at the State level challenges under the 3 major pillars - Innovation, Technology
          & Entrepreneurship. The league competition runs on a point scale where
          institutions and students can achieve points by organizing and taking part in boot
          camps, workshops, ideathons, hackathons, etc. under various
          categories.
        </p>
      </motion.div>
     
    </div>
  );
};
export default About;
