import React, { FC } from 'react'
import styles from './list.module.sass'
import { ProdInt, Product } from '../product/product'


interface ArrayPr {
    arrayProd: Array<ProdInt>
}


export const List: FC<any> = ({arrayProd}:ArrayPr) => {
    return (
        <div className={styles.arrayProd}>
            <div className={styles.balance}>
                <div className={styles.data}>
                    <div className={styles.personal}>
                        <span className={styles.phrase}>На вашем балансе</span>
                        <div className={styles.info}>
                            <img className={styles.money} src='/money.png' alt='money'/>
                            <span className={styles.quantity}>200</span>
                        </div>
                    </div>
                    <div className={styles.addition}>
                        Вы можете обменять их на скидку 200 руб.
                    </div>
                </div>
                <button>
                    Получить промокод
                </button>
            </div>
            {arrayProd.map((product: ProdInt, index) =>
                <Product
                    key={index}
                    img={product.img}
                    brand={product.brand}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                />
                )
            }
        </div>
    )
}