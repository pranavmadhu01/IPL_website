import styles from "../styles/Hero.module.css";
import ipllogo from "../public/assets/ipl2.png";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const Options = {
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    particles: {
      number: {
        value: 200,
        limit: 300,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "images/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 10,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 100,
          duration: 2,
          opacity: 1,
          speed: 2,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: {
          value: {
            r: 0,
            g: 0,
            b: 0,
          },
        },
      },
    },
    retina_detect: true,
    fps_limit: 60,
    background: {
      // image: "url('../public/assets/bg4.png')"
      image: "url('https://particles.js.org/images/background3.jpg')",
      color: {
        value: "transparent",
      },
    },
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className={styles.mainContainer}>
      <div className="test-page">
        <Particles
          className={styles.particles}
          init={particlesInit}
          options={Options}
        />
      </div>
      <div className={styles.hero_bg}></div>
      <div className={styles.hero_wrapper} id="home">
        <div className="hero-img">
          <Image src={ipllogo} />
        </div>
        <div className={styles.ztop}>
          <p className={styles.hero_title}>Innovators' Premier League </p>
          <div className={styles.hero_tag}>
            <p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Compete
            </p>
            <p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Collaborate
            </p>
            <p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Celebrate
            </p>
          </div>
          <p className={styles.hero_date}> 26 Oct 2022 - 14 Feb 2023</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
