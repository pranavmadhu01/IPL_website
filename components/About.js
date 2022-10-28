import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import styles from "../styles/About.module.css";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";
import img4 from "../public/assets/img4.jpg";
import img5 from "../public/assets/img5.jpg";
import img6 from "../public/assets/img6.jpg";
import img7 from "../public/assets/img7.jpeg";
import bg1 from "../public/assets/bg1.jpg";
import bg2 from "../public/assets/bg2.jpg";
import bg3 from "../public/assets/bg3.jpg";
import Image from "next/image";
const array = [img2, img3, img4, img5, img6, img7, bg1, bg2, bg3];
const About = () => {

  const imageRefs = useRef([])
  const ambientRef = useRef()
  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    loopArray()
    setInterval(()=>{
      loopArray()
    },5000*array.length)
  }

  const loopArray = ()=>{
    for(let i = 0 ;i<array.length;i++) {
      setTimeout(()=>{
        if(i>0){
          imageRefs.current[i-1].classList.add(styles.hide_image)
          imageRefs.current[i-1].classList.remove(styles.show_image)
        }else{
          imageRefs.current[array.length-1].classList.add(styles.hide_image)
          imageRefs.current[array.length-1].classList.remove(styles.show_image)
        }
        ambientRef.current.style.backgroundImage = `url('${array[i].src}')`
        imageRefs.current[i].classList.remove(styles.hide_image)
        imageRefs.current[i].classList.add(styles.show_image)
      },5000*i)
    }
  }
  
  return (
    <div className={styles.about_wrapper}>
       <div className={styles.image_wrapper}>
          <div>
            <div ref={ambientRef} className={styles.ambient_wrapper}></div>
            {array.map((img,i) => (
              <div className={styles.abt_img} key={i} ref={el => imageRefs.current[i] = el} >
                <Image width={400} height={300} src={img} objectFit="cover" />
              </div>
            ))}
          </div>
      </div>
      <div className={styles.about_content_wrapper}>
        <h2 className={styles.about_content_wrapper_title}><span className={styles.head_underlin}>About</span> IPL</h2>
        <p className={styles.about_content_wrapper_content}  >
          Innovators' Premier League (IPL) is an initiative of the Kerala
          Startup Mission (KSUM) to bring out the best talents from the Kerala
          Innovation Hubs. IPL aims to bring awareness and sensitization of IEDC
          & its activities among students, building a competitive &
          entrepreneurial mindset among innovators, and create the pipeline of
          startups.
          <br></br>
          During IPL, the students and other talents in the institution will
          compete with each other at the College level, followed by Regional
          level competitions under the 3 major pillars - Innovation, Technology
          & Entrepreneurship. The league competition runs on a point scale where
          institutions and students can achieve points through conducting boot
          camps, workshops, startup generation, patents, etc. under various
          categories.
        </p>
      </div>
     
    </div>
  );
};
export default About;
