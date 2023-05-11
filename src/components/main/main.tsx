import { ReactElement, FC } from 'react'
import { Window } from './window/window'
import styles from './main.module.sass'
import { Slider } from './slider/slider'


export const Main: FC<any> = (): ReactElement => {
    return (
        <div className={styles.carousel}>
            <Slider/>
            <div className={styles.windows}>
                <Window
                    img={'/mapMain.png'}
                    title={'Пункты сбора'}
                    content={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'}
                    link={'/points'}
                />
                <Window
                    img={'/shopMain.png'}
                    title={'ЭкоМаркет'}
                    content={'Используй заработанные экокоины для покупки товаров из переработанных материалов '}
                    link={'/ecomarket'}
                />
            </div>
        </div>
    )
}