import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LinkModal.module.sass'


interface LinkProps {
    url: string
    children: ReactNode
}


export const LinkModal = ({url, children}: LinkProps): JSX.Element => {
    return (
        <NavLink to={url} className={styles.links}>
            {children}
        </NavLink>
    )
}