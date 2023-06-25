import React from "react";
import "./HomeStyles.css";
import HomeTwo from "./HomeTwo";
import Services from "./Services";
import Testimonials from "./Testimonials";
const Bedroom = require("../../images/interiror.png");


function Home(){
    return(
        <>
            <section className="home_section">
            <section className="background_section">
                <div className="home_container">
                    
                        <div className="home_text">
                            <h1 className="home-text">Let's <br/><span>Make your <br/> house</span><br/> A Home.</h1>
                        </div>
                        <div className="home_img">
                            <img className="home-img img-fluid animated" src={Bedroom} alt="bedroom" />
                        </div>
                    
                </div>
                
            </section>
            </section>
            <HomeTwo />
            <Services />
            <Testimonials />
            
        </>
    );
}

export default Home;