import React from "react";
const Logo = require("../images/Logo.png");

function Navbar(){
    
    return(
        <>
            <nav className="NavbarItems">
                <img src={Logo} height="40" width="180" alt="Karishma Interiors Logo"/>
            </nav>
        </>
    );
}

export default Navbar;