import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const cards = [
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg/1200px-Machu_Picchu%2C_Peru_%282018%29.jpg",
		title: "Machu Picchu",
		description: "Maravilla del mundo ubicada en Sudamerica - Perú",
	},
	{
		image: "https://fotografias.larazon.es/clipping/cmsimages02/2020/10/22/CBCB8ECB-1BB9-465D-8AB3-5C08E5C3A5F7/98.jpg?crop=3992,2246,x0,y373&width=1900&height=1069&optimize=low&format=webply",
		title: "Muralla China",
		description: "Maravilla del mundo ubicada en Asia - China",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg",
		title: "Coliseo Romano",
		description: "Maravilla del mundo ubicada en Europa - Italia",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1200px-Chichen_Itza_3.jpg",
		title: "Chichen Itza",
		description: "Maravilla del mundo ubicada en NorteAmerica - Mexico",
	}
];

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />

			<div className="col-8 m-auto my-4">
				<div className="row g-0  container-fluid justify-content-center px-4 ">

					<Jumbotron />

				</div>


				<div className="row g-0 container-fluid d-flex justify-content-center">

					{
						cards.map((item, index) => (
							<Card title={item.title} description={item.description} image={item.image} />
						))
					}

				</div >
			</div>

			<Footer />

		</>
	);
};

export default Home;
