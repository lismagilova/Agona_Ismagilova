import React, { ReactElement, FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.sass'
import { Modal_auto } from '../modal/modal_auto'



export const Navbar: FC<any> = (): ReactElement => {
    const [visible, setVisible] = useState(false)
    return (
        <header className={styles.header}>
            <NavLink to='/main'>
                <img src='/logo.png' alt='logo' className={styles.logo}/>
            </NavLink>
            <nav className={styles.links}>
                <NavLink to='/main' className={styles.point}>Главная</NavLink>
                <NavLink to='/points' className={styles.point}>Пункты сбора</NavLink>
                <NavLink to='/ecomarket' className={styles.point}>ЭкоМаркет</NavLink>
                <NavLink to='/about' className={styles.point}>О сервисе</NavLink>
            </nav>
            <nav className={styles.personal}>
                <NavLink to='/location' className={styles.map}>
                    <img src='/location.png' alt='location'/>
                    Казань
                </NavLink>
                <NavLink to='/cash' className={styles.money}>
                    <img src='/money.png' alt='money'/>
                    1000
                </NavLink>
                <NavLink to='/account' className={styles.data} >
                    <img src='/user.png' alt='user'/>
                    Алексей
                </NavLink>
                <button onClick={() => setVisible(true)}> у меня не получилось привязать модалку не к кнопке, поэтому пока так(( </button>
            </nav>
            <Modal_auto visible={visible} onClose={() => setVisible(false)}/>
        </header>
    )
}