import React from "react";
import styled from "styled-components";
import Boxes from "../Projects/Boxes";
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
						github=""
					/>
				</Fade>

				<Fade right>
					<Boxes
						title="Weather app"
						desc="A simple weather app that will help you dress appropriately in the morning before you head out the door!"
						github=""
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
						desc="My very first web project! A small social platform where users can post whatever they want. I promise I won't censor you. xD"
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
		height: 100%;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		align-items: center;
	}

	@media screen and (max-width: 1200px) {
		height: 90vh;
		.box_section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 800px) {
		height: 100vh;
		.box_section {
			width: 75%;
			height: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 600px) {
		height: 180vh;
		/* border: solid red; */
	}

	@media screen and (max-width: 400px) {
		height: 200vh;
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
