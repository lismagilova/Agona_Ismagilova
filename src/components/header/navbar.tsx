import React, { ReactElement, FC} from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.sass'
import logo from '../../assets/logo.png'
import location from '../../assets/location.png'
import money from '../../assets/money.png'
import user from '../../assets/user.png'


export const Navbar: FC<any> = (): ReactElement => {
    return (
        <header className={styles.header}>
            <Link to='/main'>
                <img src={logo} alt='logo' className={styles.logo}/>
            </Link>
            <nav className={styles.links}>
                <a href='/main' className={styles.point}>Главная</a>
                <a href='/points' className={styles.point}>Пункты сбора</a>
                <a href='/ecomarket' className={styles.point}>ЭкоМаркет</a>
                <a href='/info' className={styles.point}>О сервисе</a>
            </nav>
            <nav className={styles.personal}>
                <a href='/location' className={styles.map}>
                    <img src={location} alt='location'/>
                    Казань
                </a>
                <a href='/cash' className={styles.money}>
                    <img src={money} alt='money'/>
                    1000
                </a>
                <a href='/account' className={styles.data}>
                    <img src={user} alt='user'/>
                    Алексей
                </a>
            </nav>
        </header>
    )
}