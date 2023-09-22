import Link from "next/link"
import Header from "../Header"
import Image from "next/image"

import { urlForImage } from "../../../sanity/lib/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Social = ({ social }) => {

    const { title, images } = social[0];

    return (
        <>
            <section id="social">
                <Header>{title}</Header>
                <div className="social_wrapper">
                    <Swiper slidesPerView={4} spaceBetween={0} pagination={{ clickable: true }} className="socialSwiper">
                        {images?.map(({ _id, link, image }, index) =>
                            <SwiperSlide key={_id} className="social_item">
                                <Link href={link} target="_blank" >
                                    <Image src={urlForImage(image).url()} width={800} height={800} alt={link} />
                                </Link>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </section >
        </>
    )
}

export default Social