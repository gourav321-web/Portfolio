import React from "react";
import styles from "./About.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className={`${styles.about}`}>
      <div className={`${styles.aboutTitle}`}>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={`${styles.aboutSection}`}>
        <div className={styles.aboutLeft}>
          <img src={profile_img} alt="" />
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.aboutPara}>
            <p>
              I’m a frontend developer from Indore, India. As a fresher, I have
              built several React.js projects and am currently gaining industry
              experience through an internship in frontend development.
            </p>
            <p>
              My passion for frontend development is reflected in the real-world
              projects I've built using React.js, as well as the dedication I
              bring to continuously learning and improving my skills.
            </p>
          </div>
          <div className={styles.aboutSkills}>
            <div className={styles.aboutSkill}>
              <p>HTML & CSS</p>
              <hr style={{ width: "50%"}} />
            </div>
            <div className={styles.aboutSkill}>
              <p>REACT-JS</p>
              <hr style={{ width: "70%" ,marginBottom: "1rem"}} />
            </div>
            <div className={styles.aboutSkill}>
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" ,marginBottom: "1rem"}} />
            </div>
            <div className={styles.aboutSkill}>
              <p>JAVA</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className={styles.aboutSkill}>
              <p>PYTHON</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
        <div className={styles.aboutAchievements}>
          <ul>
            <hr />
            <li>
            <p>
              Participated in a hackathon hosted by Acropolis Institute Of
              Technology And Research Named <span>"PRAYATNA"</span> and built a project in 36
              hours.
            </p>
          </li>
          <hr />
            <li>
            <p>
              Built and deployed multiple frontend projects using React.js,
              including a Portfolio , Todo App, Calculator, Myntra Clone And Medicose( An Online Medical Store).
            </p>
          </li>
          </ul>
        </div>
      </div>
  );
};

export default About;
