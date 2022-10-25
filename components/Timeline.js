
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "../styles/Timeline.module.css";
import flag from "../public/assets/bg3.jpg";
import Image from "next/image";



const Timeline = () => {
  return (
    <div className={styles.timeline_wrapper}>
      <div className={styles.timeline_content_wrapper}>
        <h2 className={styles.timeline_content_wrapper_title}>IPL Timeline</h2>
      </div>
      <section className={styles.ps_timeline_sec}>
        <div className={styles.container}>
            <ol className={styles.ps_timeline}>
                <li className={styles.subContainer}>
                    <div className={styles.img_handler_top}>
                    <Image width={30} src={flag} alt="flag" />
                    </div>
                    <div className={styles.ps_bot}>
                        <div className={styles.event_container}>
                            <h1 className={styles.date}>26 Oct 2022</h1>
                        <p className={styles.event_desc}>IPL Launch</p>

                        </div>
                    </div>
                    <span className={styles.ps_sp_top}>01</span>
                </li>
                <li className={styles.subContainer}>

                    <div className={styles.img_handler_bot}>
                    <Image width={50} src={flag} alt="flag" layout="fill" />

                    </div>
                    <div className={styles.ps_top}>
                    <div className={styles.event_container}>
                            <h1 className={styles.date}>Before 2 Nov 2022</h1>
                        <p className={styles.event_desc}>IPL Launch Plan Submission</p>

                        </div>
                    </div>
                    <span className={styles.ps_sp_bot}>02</span>
                </li>
                <li>
                    <div className={styles.img_handler_top}>
                    <Image width={30} src={flag} alt="flag" />

                    </div>
                    <div className={styles.ps_bot}>
                    <div className={styles.event_container}>
                            <h1 className={styles.date}>27 Oct 2022 - 14 Feb 2023</h1>
                        <p className={styles.event_desc}>Institution Level Events</p>

                        </div>
                    </div>
                    <span className={styles.ps_sp_top}>03</span>
                </li>
                <li>
                <div className={styles.img_handler_bot}>
                <Image width={30} src={flag} alt="flag" />

                    </div>
                    <div className={styles.ps_top}>
                    <div className={styles.event_container}>
                            <h1 className={styles.date}>27 Oct 2022 - 27 Dec 2022</h1>
                        <p className={styles.event_desc}>Institution Level Challenges</p>

                        </div>
                    </div>
                   <span className={styles.ps_sp_bot}>04</span>
                </li><li>
                <div className={styles.img_handler_top}>
                <Image width={30} src={flag} alt="flag" />

                    </div>
                    <div className={styles.ps_bot}>

                    <div className={styles.event_container}>
                            <h1 className={styles.date}>01 Jan 2023 - 14 Feb 2023</h1>
                        <p className={styles.event_desc}>Regional Level Challenges</p>

                        </div>
                    </div>
                    <span className={styles.ps_sp_top}>05</span>
                </li>
                <li>
                <div className={styles.img_handler_bot}>
                <Image width={30} src={flag} alt="flag" />
                    </div>
                    <div className={styles.ps_top}>
                    <div className={styles.event_container}>
                            <h1 className={styles.date}>26 Oct 2022</h1>
                        <p className={styles.event_desc}>State Level Challenges Before IEDC Summit 2023</p>

                        </div>
                    </div>
                   <span className={styles.ps_sp_bot}>06</span>
                    
                </li>
                
            </ol>
        </div>
    </section>
      </div>
    
  );
};
export default Timeline;
