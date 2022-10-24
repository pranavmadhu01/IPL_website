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
        
      </div>
    </div>
  );
};
export default About;
