import React, { ReactElement, FC, InputHTMLAttributes } from 'react'
import styles from './inputModal.module.sass'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: 'password' | 'text' | 'email'
}


export const InputModal: FC<InputProps> = ({placeholder, type}: InputProps):ReactElement => {
    return (
        <input className={styles.field} type={type} placeholder={placeholder}/>
    )
}