import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HomeTwoStyles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import Home_two_data from "./HomeTwoData";



function HomeTwo(){

    return(
        <>
            <section className="home_section_two">

            <div className="home_two_text_container">
                    <h1>One-stop solution for all Interiors</h1>
                    <p>Whether it’s a magazine-like dream kitchen or your entire home <br/> enjoy end-to-end solutions from design to installation.</p>
            </div>
            <div className="home_two_swiper_div">
            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper home_two_swiper"
                >

                    {
                    Home_two_data.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="home_two_swiper_slide">
                                    <img src={item.src} alt={item.alt} />
                                    <h2 className="home_two_card_text">{item.alt}</h2>
                                </SwiperSlide>
                                
                            );
					    }
                        )
                    }
            </Swiper>
            </div>





















                {/* <div className="home_two_text_container">
                    <h1>One-stop solution for all Interiors</h1>
                    <p>Whether it’s a magazine-like dream kitchen or your entire home <br/> enjoy end-to-end solutions from design to installation.</p>
                </div>
                <div className="home_two_img_container">

                    {
                        Home_two_data.map((item, index) => {
                            return (
                                <div className="home_two_card" key={index} >
                                    <img src={item.src} alt={item.alt} className="home_two_img"/>
                                    <h2 className="home_two_card_text">{item.alt}</h2>
                                </div>
                                
                            );
					    }
                        )
                    }


                </div> */}
                                
            </section>
        </>
    )
}

export default HomeTwo;