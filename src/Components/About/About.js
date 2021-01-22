import React from 'react'
import styles from './About.module.css'

function About(){
    return(
        <div>
            <div className={styles.colorUnderlay}>
                <div className={styles.card}>
                    <div className={styles.aboutMeCard}>
                        <img src="./images/main-photo.jpg" alt="avatar" />
                        <h2>Viktor</h2>
                        <h2>Yadelskyi</h2>
                        <div className={styles.line}></div>
                        <div className={styles.professionName}>Front-end developer</div>
                        <div className={styles.social}></div>
                    </div>
                    <div className={styles.aboutText}>
                        <h1 className={styles.aboutTitle}>Hello</h1>
                        <p className={styles.whoami}>Here's who I am & what I do</p>
                        <div className={styles.buttons}>
                            <a href='link' className={styles.buttonResume}>RESUME</a>
                            <a href='link' className={styles.buttonProjects}>PROJECTS</a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default About