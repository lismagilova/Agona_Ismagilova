import React, {FC, ReactElement, useRef, useEffect} from 'react'
import styles from './modal.module.sass'
import { ButtonModal } from './buttonModal/buttonModal'
import { LinkModal } from './linkModal/linkModal'
import { InputModal } from './inputModal/inputModal'
import { Portal } from '../portal/portal'
import { useModalClose } from "../hooks/useModalClose";
import { useRegistrationMutation } from '../../store/auth'


interface Props {
    visible: boolean,
    onClose: () => void
}


export const ModalReg: FC<any> = ({visible, onClose}: Props): ReactElement => {
    const ref = useRef<HTMLDivElement>(null)

    useModalClose(ref, () => onClose())

    const [register, result] = useRegistrationMutation()

    useEffect(() => {
        console.log(result);
    }, [result])

    const handleRegister = () => {
        const data = {
            email: 'gismagilova402@gmail.com',
            phone_number: '88005553535',
            password: '123456',
            balance: 100
        };
        register(data)
    }

    return (
        <>
            {visible &&
                <Portal>
                    <div className={styles.active} ref={ref}>
                        <div className={styles.modal__content}>
                            <div className={styles.block}>
                                <div className={styles.line}>
                                    <p className={styles.title}>Регистрация</p>
                                    <img src='/exit.png' alt='exit'/>
                                </div>
                                <form className={styles.form}>
                                    <InputModal type='text' placeholder='Имя'/>
                                    <InputModal type='email' placeholder='Почта'/>
                                    <InputModal type='text' placeholder='Телефон'/>
                                    <InputModal type='password' placeholder='Пароль'/>
                                    <InputModal type='password' placeholder='Повторите пароль'/>
                                    {/*<button onClick={ handleRegister }>fff</button>*/}
                                    <ButtonModal color={'green'} onClick={ handleRegister }>Зарегистрироваться</ButtonModal>
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