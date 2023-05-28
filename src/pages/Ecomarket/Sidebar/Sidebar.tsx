import React, { ReactElement } from 'react'
import styles from './Sidebar.module.sass'
import { Checkbox } from '../../../components/Checkbox/Checkbox'


export const Sidebar = (): ReactElement => {
    return (
        <div className={styles.field}>
            <div className={styles.type}>
                <p>Пол</p>
                <div className={styles.choose}>
                    <Checkbox>Мужской</Checkbox>
                    <Checkbox>Женский</Checkbox>
                </div>
            </div>
            <div className={styles.type}>
                <p>Тип товара</p>
                <div className={styles.choose}>
                    <Checkbox>Выбрать все</Checkbox>
                    <Checkbox>Одежда</Checkbox>
                    <Checkbox>Обувь</Checkbox>
                    <Checkbox>Аксессуары</Checkbox>
                </div>
            </div>
            <div className={styles.type}>
                <p>Брэнд</p>
                <Checkbox>Выбрать все</Checkbox>
                <div className={styles.choose__scroll}>
                    <Checkbox>H&M</Checkbox>
                    <Checkbox>P&B</Checkbox>
                    <Checkbox>Adidas</Checkbox>
                    <Checkbox>Nike</Checkbox>
                    <Checkbox>Reebok</Checkbox>
                </div>
            </div>
        </div>
    )
}