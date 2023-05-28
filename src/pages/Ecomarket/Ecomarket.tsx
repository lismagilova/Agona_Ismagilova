import React, { ReactElement } from 'react'
import styles from './Ecomarket.module.sass'
import { Sidebar } from './Sidebar/Sidebar'
import { List } from './List/List'


import sneakers1 from '../../assets/products/sneakers1.png'
import sneakers2 from '../../assets/products/sneakers2.png'
import sneakers3 from '../../assets/products/sneakers3.png'
import hoodies from '../../assets/products/hoodies.png'
import sneakers4 from '../../assets/products/sneakers4.png'


const ArrComp = [
    {img: sneakers1, brand: 'NIKE', name: 'Nike Air Max 2021', type: 'Мужская обувь', price: 1000},
    {img: sneakers2, brand: 'NIKE', name: 'Nike Air Max 90 Premium', type: 'Мужская обувь', price: 750},
    {img: sneakers3, brand: 'Adidas', name: 'Adidas Alphabounce RC', type: 'Мужская обувь', price: 1200},
    {img: hoodies, brand: 'H&M', name: 'Hoodie', type: 'Мужская одежда', price: 1000},
    {img: sneakers4, brand: 'NIKE', name: 'Nike Air Force 1 Low', type: 'Мужская обувь', price: 2100},
]


export const Ecomarket = (): ReactElement => {
    return (
        <main className={styles.market}>
            <div className={styles.substring}>
                <span className={styles.name}>ЭкоМаркет</span>
                <nav className={styles.buttons}>
                    <button className={styles.sort}>По популярности</button>
                    <button className={styles.sort}>По цене</button>
                    <button className={styles.sort}>По новизне</button>
                </nav>
            </div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <Sidebar/>
                    <button className={styles.reset}>Сбросить фильтры</button>
                </div>
                <List arrayProd={ArrComp}/>
            </div>
        </main>
    )
}