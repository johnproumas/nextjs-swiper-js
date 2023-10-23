'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { SliderImages } from '../../lib/SliderImages';
import Image from 'next/image';

const HomeSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {SliderImages.map((image, index) => (
                <SwiperSlide key={index}><Image src={image.src} alt={image.alt} /></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;