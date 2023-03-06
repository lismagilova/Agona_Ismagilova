import React, { ReactElement, FC, ReactNode } from 'react'
import styles from './buttonModal.module.sass';
import cn from 'classnames/bind'


const cx = cn.bind(styles)


type Props = {
    color: 'green' | 'gray'
    children: ReactNode
}


export const ButtonModal: FC<any> = ({color, children}: Props): ReactElement => {
    return (
        <button className={cx(styles.button, {
            greenButton: color === 'green',
            grayButton: color === 'gray'
        })}>
            {children}
        </button>
    )
}