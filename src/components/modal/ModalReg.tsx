import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './Modal.module.sass'
import { ButtonModal } from './ButtonModal/ButtonModal'
import { LinkModal } from './LinkModal/LinkModal'
import { InputModal } from './InputModal/InputModal'
import { Portal } from '../Portal/Portal'

interface ModalProps {
    visible: boolean
    onClose: () => void
}

const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Введите имя'),
    email: Yup.string().email('Введите корректный адрес электронной почты').required('Введите адрес электронной почты'),
    phone: Yup.string().required('Введите номер телефона'),
    password: Yup.string().required('Введите пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Пароли должны совпадать')
        .required('Подтвердите пароль')
})

export const ModalReg = ({ visible, onClose }: ModalProps): JSX.Element => {
    const onSubmit = (values: typeof initialValues) => {
        // Обработчик события отправки формы
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
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className={styles.error}>{formik.errors.name}</div>
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
                                        {...formik.getFieldProps('phone')}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <div className={styles.error}>{formik.errors.phone}</div>
                                    )}
                                    <InputModal
                                        type="password"
                                        placeholder="Пароль"
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className={styles.error}>{formik.errors.password}</div>
                                    )}
                                    <InputModal
                                        type="password"
                                        placeholder="Повторите пароль"
                                        {...formik.getFieldProps('confirmPassword')}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <div className={styles.error}>{formik.errors.confirmPassword}</div>
                                    )}
                                    <ButtonModal color={'green'} type="submit">
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
