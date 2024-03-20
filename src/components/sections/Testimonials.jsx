import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
            <div id="swiper_desktop" className='hidden lg:block'>
                <Swiper slidesPerView={3} spaceBetween={5} className="mySwiper" onSlideChange={slide => setMandacaru(slide.activeIndex)}>
                    <SwiperSlide></SwiperSlide>
                    {sortedTestimonials.map(({ _id, name, print, profile, text }, index) =>
                        <SwiperSlide key={_id} className={`${index === mandacaru ? null : "!-z-10"}`} ><CardComponent name={name} print={print} profile={profile} text={text} mandacaru={index === mandacaru ? true : false} /></SwiperSlide>
                    )}
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
            <div id="swipper_mobile" className='block lg:hidden'>
                <SwiperSlide></SwiperSlide>
                <Swiper slidesPerView={1} spaceBetween={-200} modules={[Navigation]} className="mySwiperSM" navigation={{ clickable: true }} onSlideChange={slide => setMandacaru(slide.activeIndex)}>
                    {sortedTestimonials.map(({ _id, name, print, profile, text }, index) =>
                        <SwiperSlide key={_id} className={`${index === mandacaru ? null : "!-z-10"}`}><CardComponent name={name} print={print} profile={profile} text={text} mandacaru={index === mandacaru ? true : false} /></SwiperSlide>
                    )}
                <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials