import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './Modal.module.sass'
import { ButtonModal } from './ButtonModal/ButtonModal'
import { LinkModal } from './LinkModal/LinkModal'
import { InputModal } from './InputModal/InputModal'
import { Portal } from '../Portal/Portal'
import { useRegistrationMutation } from '../../store/auth'

interface ModalProps {
    visible: boolean
    onClose: () => void
}

const initialValues = {
    firstname: '',
    email: '',
    phone_number: '',
    password: ''
}

const validationSchema = Yup.object({
    firstname: Yup.string().required('Введите имя'),
    email: Yup.string().email('Введите корректный адрес электронной почты').required('Введите адрес электронной почты'),
    phone_number: Yup.string().required('Введите номер телефона'),
    password: Yup.string().required('Введите пароль')
})

export const ModalReg = ({ visible, onClose }: ModalProps): JSX.Element => {
    const[register, {data, isLoading, isSuccess}] = useRegistrationMutation()

    useEffect(() => {
        console.log(data, isSuccess)
    }, [data, isSuccess])

    const handleRegister = () => {
        const data = {
            firstname: formik.values.firstname,
            email: formik.values.email,
            phone_number: formik.values.phone_number,
            password: formik.values.password,
            balance: 0
        }
        register(data)
    }

    const onSubmit = (values: typeof initialValues) => {
        handleRegister()
        console.log(values)
        onClose()
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <>
            {visible && (
                <Portal>
                    <div className={styles.active}>
                        <div className={styles.modal__content}>
                            <div className={styles.block}>
                                <div className={styles.line}>
                                    <p className={styles.title}>Регистрация</p>
                                    <button onClick={onClose}>
                                        <img src="/exit.png" alt="exit" />
                                    </button>
                                </div>
                                <form className={styles.form} onSubmit={formik.handleSubmit}>
                                    <InputModal
                                        type="text"
                                        placeholder="Имя"
                                        {...formik.getFieldProps('firstname')}
                                    />
                                    {formik.touched.firstname && formik.errors.firstname && (
                                        <div className={styles.error}>{formik.errors.firstname}</div>
                                    )}
                                    <InputModal
                                        type="email"
                                        placeholder="Почта"
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className={styles.error}>{formik.errors.email}</div>
                                    )}
                                    <InputModal
                                        type="text"
                                        placeholder="Телефон"
                                        {...formik.getFieldProps('phone_number')}
                                    />
                                    {formik.touched.phone_number && formik.errors.phone_number && (
                                        <div className={styles.error}>{formik.errors.phone_number}</div>
                                    )}
                                    <InputModal
                                        type="password"
                                        placeholder="Пароль"
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className={styles.error}>{formik.errors.password}</div>
                                    )}
                                    <ButtonModal disabled={isLoading} color={'green'} type="submit" onClick={handleRegister}>
                                        Зарегистрироваться
                                    </ButtonModal>
                                </form>
                                <div className={styles.links}>
                                    <LinkModal url={'/'}>Уже есть аккаунт?</LinkModal>
                                </div>
                                <ButtonModal color={'gray'}>Вход для партнёров</ButtonModal>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    )
}
