import React, { FC, ReactElement } from 'react'
import { Navbar } from '../header/navbar'
import { Outlet } from 'react-router-dom'
import { Info } from '../footer/info'
import styles from './layout.module.sass'


export const Layout: FC<any> = (): ReactElement => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Info />
        </div>
    )
}