import Image from 'next/image'
import styles from '../styles/Programs.module.css'

import img from '../public/assets/img5.jpg'

import {
  AiOutlineLeft,
  AiOutlineRight
} from 'react-icons/ai'
import { useRef } from 'react'

export default function Programs(){

  const scrollRef =  useRef()
  const imageRef = useRef()
  const moveLeft = ()=>{
    scrollRef.current.scrollLeft += imageRef.current.clientWidth
    console.log(scrollRef.current.scrollLeft);
  }
  const moveRight = ()=>{
    scrollRef.current.scrollLeft -= imageRef.current.clientWidth
    console.log(scrollRef.current.scrollLeft);
  }
  return (
    <div className={styles.pgm_arr_top} id='programs'>
      <AiOutlineRight onClick={moveLeft} />
      <AiOutlineLeft onClick={moveRight} />
      <div ref={scrollRef} className={styles.programs_top}>
        
        {event_data.map(event=>{
          return(
            <div className={styles.pgm_card_top}>
              
              <div ref={imageRef} className={styles.pgm_img}>
                <Image src={img} width={250} height={350}/>
              </div>
              <div className={styles.pgm_cont}>
                <p>{event.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const event_data = [
  {
    name:'Codeathon',
    image:'codeathon.jpg'
  },
  {
    name:'Design-A-Thon',
    image:'designathon.jpg'
  },
  {
    name:'Python Workshop',
    image:'python_workshop.jpg'
  },
  {
    name:'Makeathon',
    image:'makeathon.jpg'
  },
  {
    name:'Open Mic - STC',
    image:'openmic.png'
  },
  {
    name:'Design-A-Thon',
    image:'designathon.jpg'
  },
  {
    name:'Investor Cafe',
    image:'investor_cafe.jpg'
  },
  {
    name:'Why Hack - Women',
    image:'whyhack.jpg'
  },
  {
    name:'Buildathon: Day-2',
    image:'buildathon_hackathon.jpg'
  }
]