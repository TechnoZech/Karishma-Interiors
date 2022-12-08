import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import "./ProjectsStyles.css";
import ProjectData from "./ProjectData";
// import office from "../../images/office.jpg";

function Projects() {
	return (
		<>
			<section className="project_section">
				<section className="background_section">
					<div className="project_container">
						<h1 className="project_heading">Our Past Projects</h1>

						{ProjectData.map((item, index1) => {
							return (
								<div className="project_module_container" key={index1}>
									<div className="project_text_container">
										<h2>{item.heading}</h2>
                                        <p>{item.description}</p>
									</div>

									<div className="project_swiper_container">

										<Swiper
											effect={"cards"}
											grabCursor={true}
											modules={[EffectCards]}
											className="Project_Swiper"
										>
											{item.images.map((item, index2) => {

												return (
													<SwiperSlide className="Project_SwiperSlide" key={index2} >
														<img src={item.src} alt={item.alt} className="Project_images" />
													</SwiperSlide>
												);
											})}
										</Swiper>

									</div>
                                    <hr />
								</div>
							);
						})}
					</div>
				</section>
			</section>
		</>
	);
}

export default Projects;
