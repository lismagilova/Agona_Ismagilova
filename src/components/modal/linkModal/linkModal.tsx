import React, { ReactElement, FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './linkModal.module.sass'


type Props = {
    url: string
    children: ReactNode
}


export const LinkModal: FC<any> = ({url, children}: Props): ReactElement => {
    return (
        <NavLink to={url} className={styles.links}>
            {children}
        </NavLink>
    )
}