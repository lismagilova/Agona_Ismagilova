import React, { FC, ReactElement, ReactNode } from 'react'
import styles from './Checkbox.module.sass'


interface CheckboxProps {
    children: ReactNode
}


export const Checkbox: FC<CheckboxProps> = ({children}: CheckboxProps): ReactElement => {
    return (
        <label>
            <input type='checkbox' className={styles.choice}/>
            {children}
            <span className={styles.mark}></span>
        </label>
    )
}