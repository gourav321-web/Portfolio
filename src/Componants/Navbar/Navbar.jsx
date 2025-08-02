import React, { useState } from 'react';
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {

  const [menu , setmenu] = useState('home')
  return (
    <div className={`${styles.navbar}`}>
        <img src={logo} alt="image" />
        <ul className={`${styles.navMenu}`}>
            <li ><AnchorLink className={styles.anchorLInk} offset={50}  href='#home'><p onClick={()=>{setmenu("home")}}>Home</p></AnchorLink>{menu === "home"?<img src={underline} alt=''/>:<></>}</li>
            <li ><AnchorLink className={styles.anchorLInk} offset={50} href='#about'><p onClick={()=>{setmenu("about")}}>About Me</p></AnchorLink>{menu === "about"?< img src={underline} alt=''/>:<></>}</li>
            <li ><AnchorLink className={styles.anchorLInk} offset={50} href='#service'><p onClick={()=>{setmenu("services")}}>Services</p></AnchorLink>{menu === "services"?<img src={underline} alt=''/>:<></>}</li>
            <li ><AnchorLink className={styles.anchorLInk} offset={50} href='#work'><p onClick={()=>{setmenu("portfolio")}}>Portfolio</p></AnchorLink>{menu === "portfolio"?<img src={underline} alt=''/>:<></>}</li>
            <li ><AnchorLink className={styles.anchorLInk} offset={50} href='#contact'><p onClick={()=>{setmenu("contact")}}>Contact</p></AnchorLink>{menu ==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className={`${styles.navConnet}`}><AnchorLink className={styles.anchorLInk} offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
