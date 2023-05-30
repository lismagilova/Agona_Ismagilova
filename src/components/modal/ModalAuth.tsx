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
    openRegistrationModal: () => void
}

const initialValues = {
    phone: '',
    password: ''
}

const validationSchema = Yup.object({
    phone: Yup.string().required('Введите номер телефона'),
    password: Yup.string().required('Введите пароль')
})

export const ModalAuth = ({ visible, onClose, openRegistrationModal }: ModalProps): JSX.Element => {
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
                                    <p className={styles.title}>Вход</p>
                                    <button onClick={onClose}>
                                        <img src="/exit.png" alt="exit" />
                                    </button>
                                </div>
                                <form className={styles.form} onSubmit={formik.handleSubmit}>
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
                                    <ButtonModal color={'green'} type="submit">
                                        Войти
                                    </ButtonModal>
                                </form>
                                <div className={styles.links}>
                                    <button onClick={openRegistrationModal}>
                                        <LinkModal url={'/'}>
                                            Регистрация
                                        </LinkModal>
                                    </button>
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
