import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "../styles/swiper.module.css"
import CardComponent from './CardComponent';

export default function CarouselCoverflow() {
    return (
        <>
            
            <Swiper slidesPerView={3} spaceBetween={30} modules={[EffectCoverflow]} className="mySwiper" effect={'coverflow'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }} onSlideChange={slide => console.log(slide.activeIndex)}>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide><CardComponent /></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    );
}
