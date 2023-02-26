import React, {FC} from 'react'
import {ProdInt, Product} from '../product/product'
import styles from './list.module.sass'
import money from '../../../assets/money.png'


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
                            <img className={styles.money} src={money} alt='money'/>
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
            {arrayProd.map((product: ProdInt) => {
                return <Product
                    img={product.img}
                    brand={product.brand}
                    name={product.name}
                    type={product.type}
                    price={product.price}/>
                })
            }
        </div>
    )
}