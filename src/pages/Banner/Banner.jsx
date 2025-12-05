import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bg1 from '../../assets/banner/banner1.png'
import bg2 from '../../assets/banner/banner2.png'
import bg3 from '../../assets/banner/banner3.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                loop={true}
                className="mySwiper"
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}              

                modules={[Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide>
                    <img src={bg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;