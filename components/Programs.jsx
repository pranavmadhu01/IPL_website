import Image from "next/image";
import { isMobile } from "react-device-detect";
import styles from "../styles/Programs.module.css";

import img from "../public/assets/img5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";

export default function Programs() {
  const [slidesPerView, setslidesPerView] = useState(5.5);
  const [spaceBetween, setspaceBetween] = useState(20);

  useEffect(() => {
    if (isMobile) {
      setslidesPerView(1.5);
      setspaceBetween(10);
    }
  }, []);

  return (
    <div className={styles.pgm_arr_top} id="programs">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {event_data.map((event) => {
          return (
            <SwiperSlide>
              <div className={styles.pgm_card_top}>
                <div className={styles.pgm_img}>
                  <Image
                    src={event.image}
                    width={250}
                    height={250}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.pgm_cont}>
                  <p>{event.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

const event_data = [
  {
    name: "Hackathons",
    image: "/../public/assets/img5.jpg",
  },
  {
    name: "Ideathons",
    image: "/../public/assets/bg3.jpg",
  },
  {
    name: "Startup Pitch",
    image: "/../public/assets/img5.jpg",
  },
  {
    name: "Product Showcase",
    image: "/../public/assets/img7.jpeg",
  },
  {
    name: "iTalk",
    image: "/../public/assets/italk.jpg",
  },
  {
    name: "Bootcamps",
    image: "/random.png",
  },
  {
    name: "Workshops",
    image: "/../public/assets/bg1.jpg",
  },
  {
    name: "FabLab Visits",
    image: "/random.png",
  },
  {
    name: "Experience Sessions",
    image: "/../public/assets/img6.jpg",
  },
];
