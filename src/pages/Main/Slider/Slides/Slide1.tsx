import { Pattern } from '../Pattern'


export const Slide1 = (): JSX.Element => {
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