import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about_content_wrapper}>
        <h2 className={styles.about_content_wrapper_title}>About</h2>
        <p className={styles.about_content_wrapper_content}>
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
      <div className={styles.image_wrapper}>
        <Swiper
          autoplay={{ delay: 3000 }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default About;
