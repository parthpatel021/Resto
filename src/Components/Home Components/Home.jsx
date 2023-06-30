import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../CSS/Home.css";
import Dishes from "./Dishes Components/Dishes";

// --Import Swiper
import Slide from "./Slide";
import SlideItems from "./SlideItems.js"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function Home(){
    
    return(
     <>   
        <section className="home" id="home">
            <div className="home-slider">
                <div className="swiper-wrapper wrapper">
                
                {/* Doc : https://swiperjs.com/demos */}
                <Swiper spaceBetween={30} centeredSlides={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false,}}
                    pagination={{ clickable: true,}}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                        {SlideItems.map((item,index) => {
                            return (
                                <SwiperSlide>
                                    <Slide key={index} name={item.name} about={item.about} img={item.img} />
                                </SwiperSlide>
                            );
                        })}
                        
                    </Swiper>
                </div>
            </div>
        </section>
        <Dishes />
     </>
    );
}

export default Home;