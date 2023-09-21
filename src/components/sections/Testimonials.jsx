import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import "@/styles/swiper.module.css"
import CardComponent from '../CardComponent';
import { useState } from 'react';

const Testimonials = ({ testimonials }) => {
    const [mandacaru, setMandacaru] = useState(0);

    const sortedTestimonials = testimonials.sort((a, b) => b._updatedAt.localeCompare(a._updatedAt))

    return (
        <>

            <Swiper slidesPerView={3} spaceBetween={20} className="mySwiper" effect={'coverflow'} onSlideChange={slide => setMandacaru(slide.activeIndex)}>
                <SwiperSlide></SwiperSlide>
                {sortedTestimonials.map(({ name, print, profile, text }, index) =>
                    <SwiperSlide><CardComponent name={name} print={print} profile={profile} text={text} mandacaru={index === mandacaru ? true : false}/></SwiperSlide>
                )}
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Testimonials