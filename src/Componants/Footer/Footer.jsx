import React from 'react'
import styles from './Footer.module.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>

        <div className={styles.footerTopLeft}>
            <img src={footer_logo} alt="logo_image" />
            <p>"I'm a Frontend Developer based in Indore, India, with a strong foundation in building responsive and user-friendly web applications. I specialize in JavaScript, React, Bootstrap</p>
        </div>

        <div className={styles.footerTopRight}>
            <div className={styles.footerTopRightEmailInput}>
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className={styles.footerTopRightSubscribe}>Subscribe</div>
        </div>
      </div>

      <hr />

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
            <p>&copy; 2025 Gourav Rathore. All rights reserved.</p>
        </div>
        <div className={styles.footerBottomRight}>
          <div className='policy'>Terms of Services</div>
          <div className='policy'>Privacy Policy</div>
          <div className='policy'>Connect with me</div>
                
                
                
        </div>
      </div>
    </div>
  )
}

export default Footer
