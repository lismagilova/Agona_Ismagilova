import { ReactElement, FC } from 'react'
import cn from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import styles from './patternSlide.module.sass'
import { ButtonModal } from '../../modal/buttonModal/buttonModal'


const cx = cn.bind(styles)


interface Props {
    name: string
    img: string
    title: string
    content: string
    link: string
    button: string
}


export const Pattern: FC<any> = ({name, img, title, content, link, button}: Props): ReactElement => {
    return (
        <div className={cx(styles.slide, {
            slide1: name === 'slide1',
            slide2: name === 'slide2',
            slide3: name === 'slide3'
        })}>
            <div className={styles.context}>
                <div className={styles.text}>
                    <div className={styles.slideTitle}>
                        {title}
                    </div>
                    <div className={styles.slideContent}>
                        {content}
                    </div>
                </div>
                <NavLink to={link}>
                    <ButtonModal color={'green'}>
                        {button}
                    </ButtonModal>
                </NavLink>
            </div>
            <img src={img} alt='picture'
                 className={cx({
                     slide1: name === 'picture1',
                     slide2: name === 'picture2',
                     slide3: name === 'picture3'
                 })}
            />
        </div>
    )
}