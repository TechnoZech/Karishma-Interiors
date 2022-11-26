import React from "react";
import "./HomeStyles.css";
const Bedroom = require("../../images/bedroom.jpg");

function Home(){
    return(
        <>
            <section>
                <div className="home_container">
                    
                        <div className="home_text">
                            <h1 className="home-text">Let's <br/><span>Make your <br/> house</span><br/> A Home.</h1>
                        </div>
                        <div className="home_img">
                            <img className="home-img img-fluid animated" src={Bedroom} alt="bedroom" />
                        </div>
                    
                </div>
            </section>
        </>
    );
}

export default Home;