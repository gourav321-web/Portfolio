import React from 'react'
import styles from './Hero.module.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className={`${styles.hero}`}>
      <img src={`${profile_img}`} alt="" />
      <h1><span> "Hi, I'm Gourav Rathore</span> — a frontend developer from India."</h1>
      <p>Hi, I'm Gourav Rathore — a frontend developer based in Indore, India. I specialize in creating responsive, user-friendly web applications using React and modern JavaScript technologies.</p>

      <div className={`${styles.heroAction}`}>
      <div className={styles.connectMe}><AnchorLink className={styles.anchorLink} offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className={styles.myResume}>My Resume</div>
      </div>

    </div>
  )
}

export default Hero
