import React, { FC, ReactElement } from 'react'
import styles from './modal.module.sass'
import exit from '../../assets/exit.png'


export const Modal: FC<any> = ({active, setActive}): ReactElement => {
    return (
        <div className={active ? styles.active : styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.block}>
                    <div className={styles.line}>
                        <p className={styles.title}>Вход</p>
                        <img src={exit} alt='exit'/>
                    </div>
                    <div className={styles.form}>
                        <input type='number' placeholder='Телефон'/>
                        <input type='password' placeholder='Пароль'/>
                        <button className={styles.entrance}>Войти</button>
                    </div>
                    <div className={styles.links}>
                        <a href='/'>Войти с помощью смс</a>
                        <a href='/'>Регистрация</a>
                    </div>
                    <button className={styles.part}>Вход для партнёров</button>
                </div>
            </div>
        </div>
    )
}