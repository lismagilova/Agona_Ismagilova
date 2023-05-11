import { ReactElement, FC } from 'react'
import { Pattern } from '../patternSlide'


export const Slide3: FC<any> = (): ReactElement => {
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