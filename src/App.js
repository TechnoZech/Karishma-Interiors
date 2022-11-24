import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";

function App() {
	return (
		<Router>
			<Navbar />
			<main>
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Service" element={<Service />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
