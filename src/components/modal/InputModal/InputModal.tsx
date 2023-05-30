import React, { InputHTMLAttributes } from 'react'
import styles from './InputModal.module.sass'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}


export const InputModal = ({placeholder, ...restPops}: InputProps): JSX.Element => {
    return (
        <input className={styles.field} placeholder={placeholder} {...restPops}/>
    )
}