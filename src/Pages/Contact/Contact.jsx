import React from "react";
import "./ContactStyles.css";
import ContactData from "./ContactData";

function Contact() {
	return (
		<>
			<section className="contact_section">
			<section className="background_section">
				<div className="contact_whole_container">
					<h1 className="contact_heading">Contact Us</h1>
					<div className="contact_main_container">
						<div className="adress_btn_container">
							<h2>Address:</h2>
							<p>
								Rudraksh County, Behind Nijanand Ashram, Near L&T, NH-8,
								Vadodara, 390019.
							</p>

							{ContactData.map((item, index) =>{
								return( 
									<a href={item.href} key={index}>
										<i class={item.cName}></i>
									{item.text}</a>
								)
							})
							}
							

						</div>

						<div className="map_container">
							<div className="contact_map">
								<iframe title="g_map"
									width="100%"
									height="400"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rudraksh%20County,%20Behind%20Nijanand%20ashram,%20Near%20L&amp;T,%20NH-8,%20Vadodara,%20390019+(Karishma%20Interirors)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
								>
									<a href="https://www.gps.ie/sport-gps/">bike gps</a>
								</iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
			</section>
		</>
	);
}

export default Contact;
