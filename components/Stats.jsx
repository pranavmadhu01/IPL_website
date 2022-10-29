import styles from '../styles/Stats.module.css'
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";



export default function Stats(){

  const [ref, inView] = useInView()
  const nodeRef = useRef([]);
  const stati_data = [375,30000,3000,100,75]

  useEffect(() => {
    if(inView){
      stati_data.map((data,i)=>{
        let node = nodeRef.current[i];
        animate(data-50 < 0 ? 0 : data-50, data, {
          duration: 5,
          onUpdate(value) {
            node.textContent = value.toFixed(0);
          }
        });
      })
    }
    console.log("sdhnjskds");
    
  }, [inView])
  

  return(
    <div className={styles.stats_top} ref={ref}>
      <div className={styles.stat_widget}>
        <p><span><custom ref={el => nodeRef.current[0] = el}>375</custom><sup>+</sup></span><span>IEDCs</span></p>
      </div>
      <div className={styles.stat_widget}>
        <p><span><custom ref={el => nodeRef.current[1] = el}>30000</custom><sup>+</sup></span><span>Innovators</span></p>
      </div>
      <div className={styles.stat_widget}>
        <p><span><custom ref={el => nodeRef.current[2] = el}>3000</custom><sup>+</sup></span><span>Changemakers</span></p>
      </div>
      <div className={styles.stat_widget}>
        <p><span><custom ref={el => nodeRef.current[3] = el}>100</custom><sup>+</sup></span><span>Days</span></p>
      </div>
      <div className={styles.stat_widget}>
        <p><span><custom ref={el => nodeRef.current[4] = el}>75</custom><sup>+</sup></span><span>Awards</span></p>
      </div>
    </div>
  )
}