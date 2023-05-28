import React, { ReactElement, FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LinkModal.module.sass'


interface LinkProps {
    url: string
    children: ReactNode
}


export const LinkModal: FC<LinkProps> = ({url, children}: LinkProps): ReactElement => {
    return (
        <NavLink to={url} className={styles.links}>
            {children}
        </NavLink>
    )
}