import React from "react";
import styled from "styled-components";
import Me from "../../../images/Me.jpg";
import Resume from "../../../document/Resume.pdf";
import Fade from "react-reveal/Fade";
function Second() {
	return (
		<Wrapper>
			<div className="left_wrapper">
				<div className="text_area">
					<h2>👋 Hi. My name is Jun</h2>
					<h3>
						Welcome to my portfolio! <span className="divider" />
					</h3>

					<p>
						I am a highly motivated college student who loves to explore the
						possibilities of the web. I started my journey as a frontend
						developer about a year ago and I love everything this career path
						has to offer. The little I learned in college has left me hungary
						for more. Little by little, I felt in love this craft. It all
						started with a weekend search and turn into a year long adventure
						with so much more left to discovered!
					</p>

					<p>
						My journey as a web dev started when I discovered Django web
						development course in my school. After completing the course, I
						decided to explore slightly different route, and that's when I
						discovered React. I felt in love with the framework and I can't stop
						learning it! From simple landing pages with HTML and CSS to complex
						frontend with RESTful API. I strive to provide users with good
						experience when navigating my projects.
					</p>

					<p>
						When I'm not staring at codes, I'm probably either walking my dog,
						trying out new cooking recipes, or binge watch TV shows when the
						entire season is released. Occasionally, I like take my car down to
						the track and run a few laps if the weather holds up.
					</p>

					<a target="_blank" rel="noreferrer" href={Resume}>
						<button>My Resume </button>
					</a>
				</div>
			</div>
			<div className="right_wrapper">
				<div className="photo__bubble">
					<Fade right>
						<img src={Me} alt="me" />
					</Fade>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid blue; */
	/* width: 100vw; */
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--darkGrey);
	color: var(--white);
	font-family: "Kanit", sans-serif;
	.left_wrapper {
		/* border: solid red; */
		height: 100%;
		width: 60%;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		flex-direction: column;

		button {
			/* width: 5rem; */
			margin-left: 25rem;
			background: none;
			border: 4px solid;
			height: 3rem;
			width: 10rem;
			color: var(--white);
			border-color: var(--paleBlue);
			outline: 0;
			font-weight: bold;
			cursor: pointer;
			font-family: "Kanit", sans-serif;
		}

		button:hover {
			background-color: var(--paleBlue);
			color: var(--black);
			font-weight: bold;
			opacity: 0.9;
		}
	}

	.divider {
		border: solid var(--paleBlue);
		background-color: var(--paleBlue);
		width: 10rem;
		display: block;
	}

	.text_area {
		/* border: solid blue; */
		width: 50rem;
		height: 25rem;
		margin-left: 7rem;

		p {
			margin-bottom: 2rem;
		}
	}

	.right_wrapper {
		/* border: solid green; */
		height: 100%;
		width: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		border: solid thick var(--paleBlue);
		height: 18rem;
		width: 18rem;
		border-radius: 100%;
		object-fit: contain;
		margin-top: 6rem;
	}

	@media screen and (max-width: 1500px) {
		height: 130vh;
		/* border: solid red; */
		flex-direction: column-reverse;

		.left_wrapper {
			/* border: solid red; */
			height: 45%;
			width: 60%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.text_area {
			/* border: solid blue; */
			/* height: 100%; */
			height: 80%;
			width: 100%;
			margin-left: 0rem;
		}

		button {
			/* border: solid red !important; */
			margin-left: 0rem !important;
		}

		.right_wrapper {
			/* border: solid blue; */
			height: 15%;
			width: 30%;
		}

		img {
			/* border: solid red; */
			height: 14rem;
			width: 14rem;
			border-radius: 100%;
			object-fit: contain;
		}
	}

	@media screen and (max-width: 1024px) {
		.left_wrapper {
			/* border: solid red; */
			height: 25%;
			width: 60%;
		}
	}

	@media screen and (max-width: 770px) {
		.left_wrapper {
			/* border: solid red; */
			height: 60%;
			width: 70%;
		}

		img {
			height: 11rem;
			width: 11rem;
			border-radius: 100%;
			object-fit: contain;
		}
	}

	/* @media (max-width: 768px) and (max-height: 1024px) {
		left_wrapper {
			border: solid red;
			height: 75%;
			width: 70%;
		}
	} */

	@media screen and (max-width: 450px) and (max-height: 900px) {
		.left_wrapper {
			/* border: solid red; */
			height: 60%;
			width: 85%;
		}
		h2 {
			font-size: 1.1rem;
		}

		h3 {
			font-size: 0.9rem;
		}
		p {
			font-size: 0.8rem;
		}

		img {
			/* border: solid red; */
			height: 9.5rem;
			width: 9.5rem;
			border-radius: 100%;
			object-fit: contain;
		}
	}

	@media screen and (max-width: 1200px) and (max-height: 800px) {
		height: 210vh;
		.left_wrapper {
			/* border: solid red; */
			/* height: 60%;
			width: 85%; */
		}
	}

	@media screen and (max-width: 850px) and (max-height: 450px) {
		height: 230vh;
		.left_wrapper {
			/* border: solid red; */
			/* height: 60%;
			width: 85%; */
		}
	}
`;

export default Second;
