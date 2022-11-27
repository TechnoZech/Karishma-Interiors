import React from "react";
import "./HomeTwoStyles.css";

import Home_two_data from "./HomeTwoData";



function HomeTwo(){

    return(
        <>
            <section className="home_section_two">
                <div className="home_two_text_container">
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


                </div>
            </section>
        </>
    )
}

export default HomeTwo;