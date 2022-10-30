import Image from 'next/image'
import { isMobile } from 'react-device-detect';
import styles from '../styles/Programs.module.css'

import img from '../public/assets/img5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation, Autoplay } from "swiper";
import { useEffect, useState } from 'react';


export default function Programs(){

  const [slidesPerView, setslidesPerView] = useState(5.5)
  const [spaceBetween, setspaceBetween] = useState(20)

  useEffect(() => {
    if(isMobile){
      setslidesPerView(1.5)
      setspaceBetween(10)
    }
  }, [])
  

  return (
    <div className={styles.pgm_arr_top} id='programs'>   
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
        modules={[Autoplay,Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {event_data.map(event=>{
          return(
            <SwiperSlide>
              <div className={styles.pgm_card_top}>  
                <div className={styles.pgm_img}>
                  <Image src={img} width={250} height={350}/>
                </div>
                <div className={styles.pgm_cont}>
                  <p>{event.name}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const event_data = [
  {
    name:'Hackathons',
    image:'random.png'
  },
  {
    name:'Ideathons',
    image:'random.png'
  },{
    name:'Startup Pitch',
    image:'random.png'
  },
  {
    name:'Product Showcase',
    image:'random.png'
  },
  {
    name:'iTalk',
    image:'random.png'
  },
  {
    name:'Bootcamps',
    image:'random.png'
  },
  {
    name:'Workshops',
    image:'random.png'
  },
  {
    name:'FabLab Visits',
    image:'random.png'
  },
  {
    name:'Experience Sessions',
    image:'random.png'
  }
]