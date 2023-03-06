import React, { FC, ReactElement } from 'react'
import styles from './modal.module.sass'
import exit from '../../assets/exit.png'
import { ButtonModal } from './buttonModal/buttonModal'
import { InputModal } from './inputModal/inputModal'
import { LinkModal } from './linkModal/linkModal'


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
                        <InputModal type='number' placeholder='Телефон'/>
                        <InputModal type='password' placeholder='Пароль'/>
                        <ButtonModal color={'green'}>Войти</ButtonModal>
                    </div>
                    <div className={styles.links}>
                        <LinkModal url={'/'}>Войти с помощью смс</LinkModal>
                        <LinkModal url={'/'}>Регистрация</LinkModal>
                    </div>
                    <ButtonModal color={'gray'}>Вход для партнёров</ButtonModal>
                </div>
            </div>
        </div>
    )
}