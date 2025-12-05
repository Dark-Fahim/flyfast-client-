import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazonVector from '../../../assets/brands/amazon_vector.png'
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Brands = () => {
    return (
        <div className='py-20 border-b border-dotted'>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <img className='' src={amazonVector} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={amazon} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={casio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={moonstar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={randstad} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={star} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={starPeople} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brands;