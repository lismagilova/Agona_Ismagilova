import { Outlet } from 'react-router-dom'
import React, { FC, ReactElement } from 'react'
import { Navbar } from "../header/navbar"
import { Info } from "../footer/info"

export const Layout: FC<any> = (): ReactElement => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Info />
        </div>
    )
}