import React, { ReactElement, FC, ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './ButtonModal.module.sass';
import cn from 'classnames/bind'


const cx = cn.bind(styles)


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'green' | 'gray'
    children: ReactNode
}


export const ButtonModal: FC<ButtonProps> = ({color, children}: ButtonProps): ReactElement => {
    return (
        <button className={cx(styles.button, {
            greenButton: color === 'green',
            grayButton: color === 'gray'
        })}>
            {children}
        </button>
    )
}