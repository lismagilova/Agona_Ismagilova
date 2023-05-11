import React, { FC, ReactElement, ReactNode } from 'react'
import styles from './checkbox.module.sass'


type Props = {
    children: ReactNode
}


export const Checkbox: FC<any> = ({children}: Props): ReactElement => {
    return (
        <label>
            <input type='checkbox' className={styles.choice}/>
            {children}
            <span className={styles.mark}></span>
        </label>
    )
}