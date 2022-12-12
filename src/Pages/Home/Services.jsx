import React from "react";
import ServicesData from "./ServicesData.js";
import "./ServicesStyles.css";

function Services() {
	return (
		<>
			<section className="services_section">
			<section className="background_section">
				<div className="services_container">
					<div className="services_text_container">
						<h1>Services</h1>
					</div>

					<div className="services_img_container">
						{ServicesData.map((item, index) => {
							return (
								<div className="services_card" key={index}>
									<img
										src={item.src}
										alt={item.alt}
										className="services_img"
									/>
									<h2 className="services_card_text">{item.alt}</h2>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			</section>
		</>
	);
}

export default Services;
