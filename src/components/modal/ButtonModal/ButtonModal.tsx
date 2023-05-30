import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './ButtonModal.module.sass';
import cn from 'classnames/bind'


const cx = cn.bind(styles)


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'green' | 'gray'
    children: ReactNode
}


export const ButtonModal = ({color, children, ...restProps}: ButtonProps): JSX.Element => {
    return (
        <button className={cx(styles.button, {
            greenButton: color === 'green',
            grayButton: color === 'gray'
        })} {...restProps}>
            {children}
        </button>
    )
}