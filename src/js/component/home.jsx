import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Menu from "./menu.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Menu />

			<div className="container">
				<br />
				<Jumbotron />
				<br />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
