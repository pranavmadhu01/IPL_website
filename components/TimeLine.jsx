import { useEffect, useRef, useState } from "react";
import ReactHorizontalTimeline from "react-horizontal-timeline";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Timeline(){
  const [value, setValue] = useState(0)
  const [previous, setPrevious] = useState(0)
  
  const control = useAnimation()
  const [ref3, inView] = useInView()
  const descRef = useRef()

  const Variant = {
    visible:{opacity:1,width:'90%', transition: { duration: 2 }},
    hidden:{opacity: 0,width:0}
  }
  const Variant2 = {
    visible:{opacity:1,x:0, transition: { duration: 2 }},
    hidden:{opacity: 0,x:-50}
  }

  
  useEffect(() => {
    descRef.current.classList.add('animate-desc') 
    setTimeout(()=>{
      descRef.current.classList.remove('animate-desc')
    },1000)
  }, [value])

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  

  const VALUES = ['2022-10-26','2022-10-27','2022-11-02','2022-12-27','2023-01-01','2023-02-14','2023-03-04']
  const CONTENT = {
    '2022-10-26':['IPL Launch'],
    '2022-10-27':['Institution Level Events and Challenges Begins'],
    '2022-11-02':['Last date for IPL Launch Plan Submission'],
    '2022-12-27':['Institution Level Challenges ends'],
    '2023-01-01':['Regional Level Events Begins'],
    '2023-02-14':['IPL 2.0 Concludes'],
    '2023-03-04':['IEDC Summit 2023']
  }
  return(
    <div id="timeline">
        <h1 className="timeline-head">Timeline</h1>
        {/* Bounding box for the Timeline */}
        <motion.div 
          style={{ width: '80%', height: '100px', margin: '0 auto', color:'white' }}
          ref={ref3}
          variants={Variant}
          initial="hidden"
          animate={control} 
        >
          <ReactHorizontalTimeline
            index={value}
            indexClick={(index) => {
              setPrevious(value)
              setValue(index)
            }}
            getLabel={function(date) { return `${new Date(date).getDate()<10?'0'+new Date(date).getDate():new Date(date).getDate()} ${new Date(date).toLocaleString('default', { month: 'short' })} \r\n ${new Date(date).getFullYear()}` }}
            isOpenBeginning={false}
            isOpenEnding={false}
            styles={{foreground:'#ef4b6a',background:'white',outline:'white'}}
            maxEventPadding='300'
            values={ VALUES } />
        </motion.div>
        <div ref={descRef} className='timeline-cont'>   
          {/* <p className="timeline-date">{new Date(VALUES[value]).toDateString()}</p> */}
          <ul className="timeline-points">
            {CONTENT[VALUES[value]].map(point=>{
              return(
                <li>{point}</li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}