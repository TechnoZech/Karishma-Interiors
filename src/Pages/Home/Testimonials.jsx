import React from "react";
import "./TestimonialsStyles.css";
import TestmonialsData from "./TestimonialsData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

function Testimonials() {
	return (
		<>
        <section className="testimonials_section">
            <div className="testimonails_swiper_div">
                <h1 className="testimonials_heading">Testimonials</h1>
                <Swiper navigation={true} modules={[Navigation]} className="Swiper_Testimonials">

                    

                        {TestmonialsData.map((item, index) => {
							return (
                                <SwiperSlide className="SwiperSlide_Testimonials">
                                    <div key={index}>
                                        <img src={item.url} alt="Testimonial" /> <br />
                                            <i className="fa-solid fa-quote-left left_quote"></i>
                                                <p className="Testimonials_review">
                                                
                                                    {item.review}
                                                </p>
                                            <i className="fa-solid fa-quote-right right_quote"></i> 
                                        <h2 className="Testimonials_name">
                                            {item.name}
                                        </h2>

                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        
                                    </div>
                                </SwiperSlide>
							);
						})}

                    

                </Swiper>
            </div>
        </section>
		</>
	);
}

export default Testimonials;
