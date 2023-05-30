import { Card } from './Card/Card'
import styles from './Main.module.sass'
import { Slider } from './Slider/Slider'


export const Main = (): JSX.Element => {
    return (
        <div className={styles.carousel}>
            <Slider/>
            <div className={styles.windows}>
                <Card
                    img={'/mapMain.png'}
                    title={'Пункты сбора'}
                    content={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'}
                    link={'/points'}
                />
                <Card
                    img={'/shopMain.png'}
                    title={'ЭкоМаркет'}
                    content={'Используй заработанные экокоины для покупки товаров из переработанных материалов '}
                    link={'/ecomarket'}
                />
            </div>
        </div>
    )
}