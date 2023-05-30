import React, { ReactNode } from 'react'
import styles from './Checkbox.module.sass'


interface CheckboxProps {
    children: ReactNode
}


export const Checkbox = ({children}: CheckboxProps): JSX.Element => {
    return (
        <label>
            <input type='checkbox' className={styles.choice}/>
            {children}
            <span className={styles.mark}></span>
        </label>
    )
}