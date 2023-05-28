import React, { FC, ReactElement } from 'react'
import { Header } from '../header/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/footer'
import styles from './layout.module.sass'


export const Layout: FC<any> = (): ReactElement => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}