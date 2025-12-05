import React, { use } from 'react';
import customer_top from '../../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews);
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <img className='w-[250px]' src={customer_top} alt="" />
                <h2 className='font-bold text-[2.5rem]'>What our customers are sayings</h2>
                <p className=''>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: "50%",
                        depth: 200,

                        slideShadows: true,
                        scale: 0.75
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;