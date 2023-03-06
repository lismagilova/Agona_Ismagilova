import React, { ReactElement, FC } from "react"
import styles from './info.module.sass'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'


export const Info: FC<any> = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <div className={styles.block}>
                <div className={styles.section1}>
                    <img src={mail} alt='mail.icon'/>
                    <span className={styles.address}>info@ecorus.ru</span>
                </div>
                <div className={styles.section2}>
                    <img src={phone} alt='phone.icon'/>
                    <span className={styles.number}>+7 (800) 880-88-88</span>
                </div>
            </div>
        </footer>
    )
}