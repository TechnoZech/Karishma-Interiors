import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarData from "./NavbarData";
import "./NavbarStyles.css";

const Logo = require("../images/Logo.png");
function Navbar() {
	// <--------------------- To update Hamburger Menu  ------------------------->

	const [clickCvalue, setclickvalue] = useState(false);

	function changesymbol() {
		setclickvalue((prevCvalue) => {
			if (prevCvalue) {
				return (prevCvalue = false);
			} else {
				return (prevCvalue = true);
			}
		});
	}

	return (
		<>
			<nav className="NavbarItems"> 
				<NavLink
					to="/"
					exact
					className={({ isActive }) => (isActive ? undefined : undefined)}
				>
					<img
						className="logo"
						src={Logo}
						height="40"
						width="180"
						alt="Karishma Interiors Logo"
					/>
				</NavLink>

				<div className="menu-icons" onClick={changesymbol}>
					<i className={clickCvalue ? "fas fa-times" : "fas fa-bars"}></i>
				</div>

				<ul className={clickCvalue ? "nav-menu active" : "nav-menu"}>
					{NavbarData.map((item, index) => {
						return item.cName === "nav-btn" ? ( // To remove active class from call-now btn
							<li key={index}>
								<a href="tel:+919974532614" target="_blank" rel="noreferrer" className={item.cName}>
									<i class={item.icon}></i>
									{item.title}
								</a>
							</li>
						) : (
							<li key={index}>
	 							<NavLink to={item.url} className={item.cName}>
									<i class={item.icon}></i>
									{item.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
