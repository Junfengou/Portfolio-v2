import React from "react";
import styled from "styled-components";
import Boxes from "./Boxes";
import Fade from "react-reveal/Fade";

function MoreProject() {
	return (
		<Wrapper>
			<div className="box_section">
				<Fade left>
					<Boxes
						title="Restaurant menu"
						desc="Wes Bos' beginner to react course which help me tremedously on my journey"
						github="https://github.com/Junfengou/Catch-of-the-day"
					/>
				</Fade>

				<Fade top>
					<Boxes
						title="SpaceX rockets"
						desc="Here is a list of data about SpaceX's rockets. Maybe one day Elon Musk will lead us to Mars"
						github="https://github.com/Junfengou/spacex-react-graphql"
					/>
				</Fade>

				<Fade right>
					<Boxes
						title="Weather app"
						desc="A weather app that will help you dress appropriately before you head out the door!"
						github="https://github.com/Junfengou/weather-app-react"
					/>
				</Fade>

				<Fade left>
					<Boxes
						title="Quiz app w/typescript"
						desc="How much video game do you really know? Can you really call yourself a true gamer?"
						github="https://github.com/Junfengou/Quiz-app-typescript"
					/>
				</Fade>

				<Fade bottom>
					<Boxes
						title="Social media app with Django"
						desc="My first web project! A small social platform where users can post whatever they want!"
						github="http://marshpillow.pythonanywhere.com/"
					/>
				</Fade>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid red; */
	width: 100%;
	height: 70vh;
	background: var(--darkGrey);
	color: var(--offWhite);
	display: flex;
	justify-content: center;
	align-items: center;
	.box_section {
		/* border: solid blue; */
		width: 75%;
		height: 90%;

		margin-top: 3rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		align-items: center;
	}

	@media screen and (max-width: 1200px) {
		height: 130vh;
		/* border: solid red; */
		.box_section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 800px) {
		height: 85vh;
		/* border: solid red; */
		.box_section {
			width: 75%;
			height: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 600px) {
		height: 135vh;
		/* border: solid red; */
	}

	@media screen and (max-width: 400px) {
		height: 150vh;
		/* border: solid red; */
	}

	@media screen and (max-width: 390px) {
		height: 150vh;
		/* border: solid red; */
	}

	@media screen and (max-width: 360px) {
		height: 175vh;
		/* border: solid red; */
	}
`;
export default MoreProject;

{
	/*
@media screen and (max-width: 1200px) {
		.box_section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 1000px) {
		height: 130vh;
		.box_section {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
		}
	}

*/
}
