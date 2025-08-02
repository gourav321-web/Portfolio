import React from 'react'
import styles from './Services.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className={styles.services}>
        <div className={styles.serviceTitle}>
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div id='service' className={styles.serviceContainer}>
            {services_data.map((service,index)=>{
                return <div key={index} className={styles.serviceFormat}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className={styles.servicesReadmore}>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="image" />
                    </div>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Services
