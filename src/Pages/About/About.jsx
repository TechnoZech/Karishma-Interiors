import React from "react";
import "./AboutStyles.css";
import profile from "../../images/profile.jpg";


function About(){
    return(
        <>
            <section className="about_section">
            <section className="background_section">
                <div className="about_container">
                    <h1 className="about_heading">
                        About Us
                    </h1> <br />
                    <img src={profile} alt="profile" className="about_profile"/>
                    <h2>Surendar Jangid</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est sed maiores nostrum, sapiente dicta iusto sint. Incidunt temporibus ab numquam commodi aperiam ullam, provident iusto qui veniam dolor quod illo! Exercitationem commodi tempora amet, sequi ullam maxime repellat a aperiam accusamus quis! Facere adipisci similique vitae! Expedita, enim iure!lorem50
                    </p>
                </div>
            </section>
            </section>
        </>
    );
}

export default About;