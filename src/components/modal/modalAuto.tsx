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


export const ModalAuto: FC<any> = ({visible, onClose}: Props): ReactElement => {
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