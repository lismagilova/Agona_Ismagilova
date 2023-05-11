import React, { FC } from 'react'
import styles from './produst.module.sass'


export interface ProdInt {
    img: string
    brand: string
    name: string
    type: string
    price: number
}


export const Product: FC<any> = (props: ProdInt) => {
    return (
        <div className={styles.card}>
            <div className={styles.label}>
                <span className={styles.brand}>{props.brand}</span>
            </div>
            <img className={styles.image} src='/money.png' alt='product'/>
            <div className={styles.data}>
                <div className={styles.model}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.type}>{props.type}</span>
                </div>
                <div className={styles.cash}>
                    <img className={styles.money} src='/money.png' alt='money'/>
                    <span className={styles.price}>{props.price}</span>
                </div>
            </div>
        </div>
    )
}