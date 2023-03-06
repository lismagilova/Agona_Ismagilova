import React, { ReactElement, FC } from 'react'
import styles from './inputModal.module.sass'


type Props = {
    placeholder: string
    type: 'password' | 'number'
}


export const InputModal: FC<any> = ({placeholder, type}: Props):ReactElement => {
    return (
        <input className={styles.field} type={type} placeholder={placeholder}/>
    )
}