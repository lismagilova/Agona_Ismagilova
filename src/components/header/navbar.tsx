import React, { ReactElement, FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.sass'
import logo from '../../assets/logo.png'
import location from '../../assets/location.png'
import money from '../../assets/money.png'
import user from '../../assets/user.png'
import { Modal } from '../modal/modal'


export const Navbar: FC<any> = (): ReactElement => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <header className={styles.header}>
            <NavLink to='/main'>
                <img src={logo} alt='logo' className={styles.logo}/>
            </NavLink>
            <nav className={styles.links}>
                <NavLink to='/main' className={styles.point}>Главная</NavLink>
                <NavLink to='/points' className={styles.point}>Пункты сбора</NavLink>
                <NavLink to='/ecomarket' className={styles.point}>ЭкоМаркет</NavLink>
                <NavLink to='/about' className={styles.point}>О сервисе</NavLink>
            </nav>
            <nav className={styles.personal}>
                <NavLink to='/location' className={styles.map}>
                    <img src={location} alt='location'/>
                    Казань
                </NavLink>
                <NavLink to='/cash' className={styles.money}>
                    <img src={money} alt='money'/>
                    1000
                </NavLink>
                <NavLink to='/account' className={styles.data} onClick={() => setModalActive(true)}>
                    <img src={user} alt='user'/>
                    Алексей
                </NavLink>
            </nav>
            <Modal active={modalActive} setActive={setModalActive}/>
        </header>
    )
}