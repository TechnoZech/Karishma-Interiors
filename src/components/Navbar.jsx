import React, { useState,} from "react";
import { NavLink } from "react-router-dom";
import NavbarData from "./NavbarData";
import "./NavbarStyles.css";
const Logo = require("../images/Logo.png");
function Navbar() {

// const [setClass] = useState({});

//   function ClassHandler() {
//     setClass(()=>{
// 		if(!clickCvalue){
// 			setclickvalue((prevCvalue) => {
// 				if (prevCvalue) {
// 					return (prevCvalue = false);
// 				} else {
// 					return (prevCvalue = true);
// 				}
// 			});
// 		}
// 	});
//   }

// <----------------- Scroll to top for Brand icon -------------------->

function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// <----------------- To update Hamburger Menu to cross icon  -------------------->

	let [clickCvalue, setclickvalue] = useState(false);
	let [isOpen, setisOpen] = useState(false);

	function changesymbol() {
		if(isOpen){
			setisOpen(false);
			setclickvalue(false);
		}else{
			setclickvalue(true);
		}
	}

	function updateOpen(){
		setisOpen(!isOpen);
		changesymbol();
	}



	return (
		<>
			<nav className="NavbarItems"> 

{/* // <----------------------   Navbar Logo  ----------------------> */}

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
						onClick={scrollUp}
					/>
				</NavLink>

{/* // <----------------------   Navbar Hamburger Icon  ----------------------> */}

				<div className="menu-icons" onClick={updateOpen} >
					<i className={clickCvalue ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
{/* // <------------------- Navbar Hamburger Menu List Logic  ---------------------> */}

				<ul className={isOpen ? "nav-menu active" : "nav-menu"}>

					{NavbarData.map((item, index) => {
						return item.cName === "nav-btn" ? ( // To remove active class from call-now btn
							<li key={index}>
								<a href="tel:+919974532614" target="_blank" rel="noreferrer" className={item.cName}>
									<i class={item.icon}></i>
									{item.title}
								</a>
							</li>

/* // <----------------------  To render Navbar  ----------------------> */
						) : (
							<li key={index} onClick={changesymbol}>
	 							<NavLink to={item.url} className={item.cName} >
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
