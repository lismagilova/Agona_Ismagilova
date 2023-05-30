import { Pattern } from '../Pattern'


export const Slide3 = (): JSX.Element => {
    return (
        <>
            <Pattern
                name={'slide3'}
                img={'/slide3.png'}
                title={'Что с масками?'}
                content={'Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.'}
                link={'/points'}
                button={'Пункты сбора масок'}
            />
        </>
    )
}