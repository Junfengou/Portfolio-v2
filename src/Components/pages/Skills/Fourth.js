import React from "react";
import styled from "styled-components";
import Bubble from "./Bubble";

function Fourth() {
	return (
		<Wrapper>
			<div className="info__container">
				<div className="stack">
					<h3>Development</h3>
				</div>
				<div className="stack__info">
					<Bubble data="React" />
					<Bubble data="HTML" />
					<Bubble data="CSS" />
					<Bubble data="GSAP" />
					<Bubble data="Material-UI" />
					<Bubble data="Node.JS" />
					<Bubble data="Bcrypt.JS" />
					<Bubble data="MongoDB" />
				</div>
			</div>
			<div className="info__container">
				<div className="stack">
					<h3>Expoosure</h3>
				</div>
				<div className="stack__info">
					<Bubble data="Java" />
					<Bubble data="Python" />
					<Bubble data="Django" />
					<Bubble data="GraphQL" />
					<Bubble data="MySQL" />
				</div>
			</div>
			<div className="info__container">
				<div className="stack">
					<h3>Tools</h3>
				</div>
				<div className="stack__info">
					<Bubble data="Github" />
					<Bubble data="Comd Line" />
					<Bubble data="Postman" />
					<Bubble data="Insomnia" />
					<Bubble data="Photoshop" />
					<Bubble data="Figma" />
					<Bubble data="Firebase" />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid yellow; */
	/* width: 100vw; */
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--darkGrey);
	color: var(--white);

	.info__container {
		/* border: solid red; */
		height: 80%;
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.stack {
		/* border: solid blue; */
		height: 10%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.stack__info {
		/* border: solid green; */
		height: 70%;
		width: 80%;
		display: grid;
		place-items: center; //MUST HAVE FOR GRID LAYOUT!!
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (max-width: 1500px) {
		height: 100vh;
		display: grid;
		place-items: center; //MUST HAVE FOR GRID LAYOUT!!
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;

		.info__container {
			/* border: solid red; */
			height: 90%;
			width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.stack {
			font-size: 1.2rem;
		}

		.stack__info {
			/* border: solid green; */
			width: 75%;
			height: 90%;
		}
	}

	@media screen and (max-width: 1000px) {
		height: 160vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		.info__container {
			/* border: solid red; */
			height: 30%;
			width: 65%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.stack {
			font-size: 1.2rem;
		}

		.stack__info {
			/* border: solid green; */
			width: 85%;
			height: 90%;
		}
	}

	@media screen and (max-width: 1000px) {
		height: 160vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		.info__container {
			/* border: solid red; */
			height: 30%;
			width: 65%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.stack {
			font-size: 1.2rem;
		}

		.stack__info {
			/* border: solid green; */
			width: 85%;
			height: 75%;
		}
	}

	@media screen and (max-width: 450px) {
		height: 160vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		.info__container {
			/* border: solid red; */
			height: 30%;
			width: 65%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.stack {
			font-size: 1.2rem;
		}

		.stack__info {
			/* border: solid green; */
			width: 100%;
			height: 85%;
		}
	}

	@media screen and (max-width: 300px) {
		height: 200vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		.info__container {
			/* border: solid red; */
			height: 30%;
			width: 65%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.stack {
			font-size: 1.2rem;
		}

		.stack__info {
			/* border: solid green; */
			width: 100%;
			height: 85%;
			display: grid;
			place-items: center; //MUST HAVE FOR GRID LAYOUT!!
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
		}
	}
`;

export default Fourth;
