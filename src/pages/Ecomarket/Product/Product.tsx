import React, { FC } from 'react'
import styles from './Produst.module.sass'


export interface ProductProps {
    img: string
    brand: string
    name: string
    type: string
    price: number
}


export const Product: FC<ProductProps> = (props: ProductProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.label}>
                <span className={styles.brand}>{props.brand}</span>
            </div>
            <img className={styles.image} src={props.img} alt='product'/>
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