import { ReactElement, FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Slide1 } from './slides/slide1'
import { Slide2 } from './slides/slide2'
import { Slide3 } from './slides/slide3'
import styles from './slider.module.sass'
import 'swiper/swiper.css'

export const Slider: FC<any> = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide><Slide1/></SwiperSlide>
                <SwiperSlide><Slide2/></SwiperSlide>
                <SwiperSlide><Slide3/></SwiperSlide>
            </Swiper>
        </div>
    )
}