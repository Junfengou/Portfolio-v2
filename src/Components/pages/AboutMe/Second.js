import React from "react";
import styled from "styled-components";
import Me from "../../../images/Me.jpg";
import Resume from "../../../document/Resume.pdf";
function Second() {
	return (
		<Wrapper>
			<div className="left_wrapper">
				<div className="text_area">
					<h1>Hi! My name is Jun.</h1>
					<h3>
						Welcome to my portfolio. <span className="divider" />
					</h3>

					<p>
						I am a college student at University of Omaha Nebraska studying
						Management Information System. Although I am not a genius by any
						mean when it comes to complex algorithms, I do enjoy building
						websites. From simple landing pages with HTML and CSS to complex
						frontend framework with RESTful API. I strive to provide users with
						good experience when navigating my projects.
					</p>
					<p>
						I love learning new materials during my free time to further improve
						and hone my skills as a web developer. I enjoy talking to people in
						the computer science field and always looking for opportunities to
						work with those who are willing to share their knowledges.
					</p>
					{/* <p>I'm a self taught front end developer</p> */}
				</div>
				<a target="_blank" rel="noreferrer" href={Resume}>
					<button>Download Resume</button>
				</a>
			</div>
			<div className="right_wrapper">
				<div className="photo__bubble">
					<img src={Me} alt="me" />
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

	.left_wrapper {
		/* border: solid red; */
		height: 100%;
		width: 60%;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		flex-direction: column;

		a {
			text-decoration: none;
			color: var(--white);
		}

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

		&:hover {
			box-shadow: inset 0 -55px 0 0 var(--paleBlue);
		}
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
		/* border: solid red; */
		height: 18rem;
		width: 18rem;
		border-radius: 100%;
		object-fit: contain;
	}
`;

export default Second;
