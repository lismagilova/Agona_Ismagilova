import React, { FC, ReactElement, useRef } from 'react'
import styles from './Modal.module.sass'
import { ButtonModal } from './ButtonModal/ButtonModal'
import { LinkModal } from './LinkModal/LinkModal'
import { InputModal } from './InputModal/InputModal'
import { Portal } from '../Portal/Portal'
import { useModalClose } from "../hooks/useModalClose";


interface ModalProps {
    visible: boolean,
    onClose: () => void
}


export const ModalAuth: FC<ModalProps> = ({visible, onClose}: ModalProps): ReactElement => {
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
                                    <button onClick={onClose}>
                                        <img src='/exit.png' alt='exit'/>
                                    </button>
                                </div>
                                <form className={styles.form}>
                                    <InputModal type='text' placeholder='Телефон' /*name={tt}*//>
                                    <InputModal type='password' placeholder='Пароль'/>
                                    <ButtonModal color={'green'}>Войти</ButtonModal>
                                </form>
                                <div className={styles.links}>
                                    <LinkModal url={'/'}>Регистрация</LinkModal>
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