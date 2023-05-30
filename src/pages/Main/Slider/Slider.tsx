import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Slide1 } from './Slides/Slide1'
import { Slide2 } from './Slides/Slide2'
import { Slide3 } from './Slides/Slide3'
import styles from './Slider.module.sass'
import 'swiper/swiper.css'


export const Slider = (): JSX.Element => {
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