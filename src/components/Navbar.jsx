import React, { useState } from "react";
import NavbarData from "./NavbarData";
import "./NavbarStyles.css";

const Logo = require("../images/Logo-white.png");
function Navbar() {
	

    const[clickCvalue, setclickvalue] = useState(false);

    function changesymbol(){
        setclickvalue(
            (prevCvalue)=>{
                if(prevCvalue){
                    return prevCvalue = false;
                }else{
                    return prevCvalue = true;
                }
            }
        )
    }


	return (

		<>
			<nav className="NavbarItems">
				<img
					className="logo"
					src={Logo}
					height="40"
					width="180"
					alt="Karishma Interiors Logo"
				/>

				<div className="menu-icons" onClick={changesymbol}>
					<i className={clickCvalue ? "fas fa-times" : "fas fa-bars"}></i>
				</div>

				<ul className={clickCvalue ? "nav-menu active" : "nav-menu"}>
					{NavbarData.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.url} className={item.cName}>
									<i class={item.icon}></i>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
