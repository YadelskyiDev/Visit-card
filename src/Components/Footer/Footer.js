import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.container}>
            <p>&#64; 2021 by Viktor Yadelskyi.</p>
    

            <div className={styles.contact}>
                <div>
                    <h3>Call</h3>
                    <p>somenumber</p>
                </div>

                <div>
                    <h3>Write</h3>
                    <p>myemail@gmail.com</p>
                </div>

                <div>
                    <h3>Follow</h3>
                    <p>follow me</p>
                </div>
            </div>
 
        </div>
    )
}

export default Footer