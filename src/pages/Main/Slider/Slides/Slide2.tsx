import { ReactElement } from 'react'
import { Pattern } from '../Pattern'


export const Slide2 = (): ReactElement => {
    return (
        <>
            <Pattern
                name={'slide2'}
                img={'/slide2.png'}
                title={'А вы знали...'}
                content={'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? '}
                link={'/about'}
                button={'Узнать больше'}
            />
        </>
    )
}