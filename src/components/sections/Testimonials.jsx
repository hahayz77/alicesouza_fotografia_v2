import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import "@/styles/swiper.module.css"
import CardComponent from '../CardComponent';
import { useState } from 'react';
import Header from '../Header';

const Testimonials = ({ testimonials }) => {
    const [mandacaru, setMandacaru] = useState(0);

    const sortedTestimonials = testimonials.sort((a, b) => b._updatedAt.localeCompare(a._updatedAt))

    return (
        <section id="testimonials">
            <Header> Depoimentos </Header> 
            <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper" effect={'coverflow'} onSlideChange={slide => setMandacaru(slide.activeIndex)}>
                <SwiperSlide></SwiperSlide>
                {sortedTestimonials.map(({ _id, name, print, profile, text }, index) =>
                    <SwiperSlide key={_id}><CardComponent name={name} print={print} profile={profile} text={text} mandacaru={index === mandacaru ? true : false}/></SwiperSlide>
                )}
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonials