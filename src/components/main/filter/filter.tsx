import React, {FC, ReactElement} from 'react'
import styles from './filter.module.sass'

export const Filter: FC<any> = (): ReactElement => {
    return (
        <div className={styles.field}>
            <div className={styles.type}>
                <p>Пол</p>
                <div className={styles.choose}>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Мужской
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Женский
                        <span className={styles.mark}></span>
                    </label>
                </div>
            </div>
            <div className={styles.type}>
                <p>Тип товара</p>
                <div className={styles.choose}>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Выбрать все
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Одежда
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Обувь
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Аксессуары
                        <span className={styles.mark}></span>
                    </label>
                </div>
            </div>
            <div className={styles.type}>
                <p>Брэнд</p>
                <label>
                    <input type='checkbox' className={styles.choice}/>Выбрать все
                    <span className={styles.mark}></span>
                </label>
                <div className={styles.choose__scroll}>
                    <label>
                        <input type='checkbox' className={styles.choice}/>H&M
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>P&B
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Adidas
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Nike
                        <span className={styles.mark}></span>
                    </label>
                    <label>
                        <input type='checkbox' className={styles.choice}/>Reebok
                        <span className={styles.mark}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}