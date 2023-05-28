import React, { ReactElement, FC, ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './ButtonModal.module.sass';
import cn from 'classnames/bind'


const cx = cn.bind(styles)


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'green' | 'gray'
    children: ReactNode
    type?: ButtonHTMLAttributes<string>['type']
}


export const ButtonModal: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    return (
        <button className={cx(styles.button, {
            greenButton: props.color === 'green',
            grayButton: props.color === 'gray'
        })} type={props.type}>
            {props.children}
        </button>
    )
}