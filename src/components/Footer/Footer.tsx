import React, { ReactElement } from 'react'
import styles from './Footer.module.sass'


export const Footer = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <div className={styles.block}>
                <div className={styles.section1}>
                    <img src='/mail.png' alt='mail.icon'/>
                    <span className={styles.address}>info@ecorus.ru</span>
                </div>
                <div className={styles.section2}>
                    <img src='/phone.png' alt='phone.icon'/>
                    <span className={styles.number}>+7 (800) 880-88-88</span>
                </div>
            </div>
        </footer>
    )
}