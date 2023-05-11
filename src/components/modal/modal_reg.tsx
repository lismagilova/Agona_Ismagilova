import React, { FC, ReactElement, useRef } from 'react'
import styles from './modal.module.sass'
import { ButtonModal } from './buttonModal/buttonModal'
import { LinkModal } from './linkModal/linkModal'
import { InputModal } from './inputModal/inputModal'
import { Portal } from '../portal/portal'
import { useModalClose } from "../hooks/useModalClose";


interface Props {
    visible: boolean,
    onClose: () => void
}


export const Modal_reg: FC<any> = ({visible, onClose}: Props): ReactElement => {
    const ref = useRef<HTMLDivElement>(null)

    useModalClose(ref, () => onClose())

    return (
        <>
            {visible &&
                <Portal>
                    <div className={styles.active} ref={ref}>
                        <div className={styles.modal__content}>
                            <div className={styles.block}>
                                <div className={styles.line}>
                                    <p className={styles.title}>Вход</p>
                                    <img src='/exit.png' alt='exit'/>
                                </div>
                                <form className={styles.form}>
                                    <InputModal type='string' placeholder='Имя'/>
                                    <InputModal type='mail' placeholder='Почта'/>
                                    <InputModal type='number' placeholder='Телефон'/>
                                    <InputModal type='password' placeholder='Пароль'/>
                                    <InputModal type='password' placeholder='Повторите пароль'/>
                                    <ButtonModal color={'green'}>Зарегистрироваться</ButtonModal>
                                </form>
                                <div className={styles.links}>
                                    <LinkModal url={'/'}>Уже есть аккаунт?</LinkModal>
                                </div>
                                <ButtonModal color={'gray'}>Вход для партнёров</ButtonModal>
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}