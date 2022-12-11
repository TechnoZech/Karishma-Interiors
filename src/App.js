import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Footer from './components/Footer';
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Privacy/Terms";
import Whatsapp from "./components/Whatspp";
import ScrollToTop from './components/Scroll';

function App() {
	return (
		<Router>
		<ScrollToTop />
			<Navbar />
			<Whatsapp />
			<main>
				<Routes>
				
					<Route path="*" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Projects" element={<Projects />} />
					<Route path="/Privacy" element={<Privacy />} />
					<Route path="/Terms" element={<Terms />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
