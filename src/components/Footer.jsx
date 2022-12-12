import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";
import FooterData from "./FooterData";
function Footer(){
    return(
        <>
            <section className="footer_section">
            <section className="background_section_footer">
                <div className="footer_container">

                            {FooterData.ExternalLink.map((item,index)=>{
                                return(
                                    <div key={index} className="External_link_container">
                                        <i className={item.iclass}></i>
                                        <a href={item.url} rel="noreferrer" target="_blank">{item.name}</a>
                                    </div>
                                )
                            })}
                            <div className="Footer_social_icons">
                                {FooterData.icons.map((item,index)=>{
                                    return(
                                            <a href={item.url} rel="noreferrer" target="_blank" key={index}><i className={item.iclass}></i></a>
                                    )
                                })}
                            </div>

                            <div className="footer_last_lines">
                                <div className="policy">
                                    <Link to="/privacy" className="policy_link"> Privacy Policy </Link> <span>|</span>
                                    <Link to="/terms" className="policy_link"> Terms&Conditions</Link>
                                </div>
                                <h4>Designed & Developed By <a href="https://www.youtube.com/?gl=IN">@DoozyDope</a> </h4>
                                <h3>Copyright © {new Date().getFullYear()} Karishma Interiors. All Rights Reserved.</h3>
                                
                            </div>

                    
                </div>
            </section>
            </section>
        </>
    )
}

export default Footer;