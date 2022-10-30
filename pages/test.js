import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "../styles/Header.module.css"

const test = () => {

const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "top",
        enable: true,
        outMode: "out",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "edge",
      },
      size: {
        random: true,
        value: 3,
      },
    },
  detectRetina: true,


}

    const particlesInit = async (main) => {
    await loadFull(main);
}
  return (
    <div className='test-page'>
            <Particles className={styles.particles} init={particlesInit} options={particlesOptions} />
        
    </div>
  )
}

export default test