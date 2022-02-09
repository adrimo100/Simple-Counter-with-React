import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cell from "./cell.jsx";

//create your first component
const Home = () => {
	return (
		<div className="bg-dark m-2 d-flex justify-content-center align-items-center">
			<Cell value="clockIcon" />
			<Cell value={clock.cenMil} />
			<Cell value={clock.decMil} />
			<Cell value={clock.mil} />
			<Cell value={clock.cen} />
			<Cell value={clock.dec} />
			<Cell value={clock.uni} />
		</div>
	);
};

let clock = {
	total: 0,
	uni: 0,
	dec: 0,
	cen: 0,
	mil: 0,
	decMil: 0,
	cenMil: 0,
};

const counter = () => {
	clock.total++;

	let totalStr = clock.total.toString();

	//paso las claves de clock  a un array
	let clockKeys = Object.keys(clock);

	clockKeys.shift();

	//Asigno cada cifra a su variable del reloj
	for (let i = 0; i < clock.total.toString().length; i++) {
		clock[clockKeys[i]] = totalStr[totalStr.length - 1 - i];
	}
};

setInterval(counter, 1000);

export default Home;
