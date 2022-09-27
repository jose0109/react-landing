import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
