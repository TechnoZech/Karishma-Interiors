import React from "react";
import Home_three_data from "./HomeThreeData.js";
import "./HomeThreeStyles.css";

function Homethree() {
	return (
		<>
			<section className="home_three_section">
				<div className="home_three_container">
					<div className="home_three_text_container">
						<h1>Services</h1>
					</div>

					<div className="home_three_img_container">
						{Home_three_data.map((item, index) => {
							return (
								<div className="home_three_card" key={index}>
									<img
										src={item.src}
										alt={item.alt}
										className="home_three_img"
									/>
									<h2 className="home_three_card_text">{item.alt}</h2>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Homethree;
