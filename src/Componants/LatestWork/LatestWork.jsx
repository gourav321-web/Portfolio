import React from 'react'
import styles from './LatestWork.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const LatestWork = () => {
  return (
    <div id='work' className={styles.myWork}>
      <div className={styles.myWorkTitle}>
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className={styles.myWorkContainer}>
        {mywork_data.map((work , index)=>{
            return <img key={index} src={work.w_img} alt=''/>
        })}
      </div>

      <div className={styles.myWorkShowMore}>
        <h2>Show More</h2>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default LatestWork
