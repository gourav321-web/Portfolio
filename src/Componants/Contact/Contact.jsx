import React from 'react'
import styles from './Contact.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "74a009a2-7af7-42d6-9883-7f43d7c3f81f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.contactTitle}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="image" />
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
            <h1>Let's talk</h1>
            <p>"I'm currently open to job opportunities and freelance projects. As a motivated fresher with a strong foundation in web development, I'm eager to contribute, learn, and grow. If you're looking for someone passionate and reliable, feel free to get in touch — I'm available and excited to collaborate!"
            </p>
            
            <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                    <img src={mail_icon} alt="" />
                    <p>gouravrathore7747@gmail.com</p>
                </div>
                <div className={styles.contactDetail}>
                    <img src={call_icon} alt="" />
                    <p>+91-7747021687</p>
                </div>
                <div className={styles.contactDetail}>
                    <img src={location_icon} alt="" />
                    <p>Indore, India</p>
                </div>

            </div>
        </div>

        <form  onSubmit={onSubmit} className={styles.contactRight}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>

            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your Email' name='email' />

            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
            <button type='submit' className={styles.contactSubmit}>Submit now</button>
        </form>
        
      </div>
      <span>{result}</span>

      
    </div>
  )
}

export default Contact

