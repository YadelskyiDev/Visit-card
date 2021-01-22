import React from 'react'
import styles from './Nav.module.css'

function Nav() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.cube}></div>
                <h1>Viktor Yadelskyi</h1>
                <div>/</div>
                <p>Front-end developer</p>
            </div>
            <ul className={styles.links}>
                <li>About Me</li>
                <li>Resume</li>
                <li>Projects</li>
            </ul>
        </div>
    )
}

export default Nav