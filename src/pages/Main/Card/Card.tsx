import { ReactElement, FC } from 'react'
import cn from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import styles from './Card.module.sass'


const cx = cn.bind(styles)


interface FillProps {
    img: string
    title: string
    content: string
    link: string
}


export const Card: FC<FillProps> = ({img, title, content, link}: FillProps): ReactElement => {
    return (
        <div className={styles.window}>
            <div className={styles.context}>
                <div className={styles.text}>
                    <div className={styles.windowTitle}>
                        {title}
                    </div>
                    <div className={styles.windowContent}>
                        {content}
                    </div>
                </div>
                <NavLink to={link}>
                    <button className={styles.arrow}>
                        <img src='/arrow.png' alt={link}/>
                    </button>
                </NavLink>
            </div>
            <img src={img} alt='picture'
                 className={cx({
                     map: link === '/points',
                     shop: link === '/ecomarket'
                 })}
            />
        </div>
    )
}