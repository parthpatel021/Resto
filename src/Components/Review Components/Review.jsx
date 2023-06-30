import React, { useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import reviewData from "./reviewData.js";
import "../../CSS/Review.css";

//  -- swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function Review(){
    return(
        <>
            <section className="review" id="review">
                <h3 className="sub-heading">customer's review</h3>
                <h1 className="heading">what they say</h1>

                <div className="swiper-container review-slider">
                    <div className="swiper-wrapper">

                        {/* Doc : https://swiperjs.com/demos */}
                        <Swiper slidesPerView={3} spaceBetween={30}
                            pagination={{ clickable: true,}}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {reviewData.map((user,index)=>{
                                return(
                                    <SwiperSlide>
                                        <ReviewCard 
                                            key = {index}
                                            name = {user.name}
                                            rating = {user.rating}
                                            content = {user.content}
                                            img = {user.img}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Review;
