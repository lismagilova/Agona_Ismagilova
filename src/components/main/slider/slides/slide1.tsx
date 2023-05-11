import { ReactElement, FC } from 'react'
import { Pattern } from '../patternSlide'


export const Slide1: FC<any> = (): ReactElement => {
    return (
        <>
            <Pattern
                name={'slide1'}
                img={'/slide1.png'}
                title={'Сделаем мир чище'}
                content={'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов'}
                link={'/about'}
                button={'Условия сервиса'}
            />
        </>
    )
}