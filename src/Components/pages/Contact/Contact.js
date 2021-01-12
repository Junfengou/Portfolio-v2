import React from "react";
import styled from "styled-components";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import Jello from "react-reveal/Jello";

function Contact() {
	return (
		<Wrapper>
			<div className="container">
				<h2>Let's build something together!</h2>
				<Jello>
					<a href="mailto:junfengou@gmail.com">
						<button>Get in touch!</button>
					</a>
				</Jello>
				<p>Build using React with help from ☕ and 🍵</p>

				<div className="icons">
					<div className="icon">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/junfeng-ou-a359b41a4/"
						>
							<RiLinkedinBoxFill className="react_icon" />
						</a>
					</div>

					<div className="icon">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/furioustiger32/"
						>
							<RiInstagramFill className="react_icon" />
						</a>
					</div>

					<div className="icon">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Junfengou/"
						>
							<ImGithub className="react_icon" />
						</a>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

{
	/*

<h2>Let's build something together!</h2>
			<button>Contact me!</button>*/
}

const Wrapper = styled.div`
	height: 40vh;
	background: var(--darkGrey);
	color: var(--white);
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Kanit", sans-serif;
	/* border: solid red; */

	.container {
		/* border: solid red; */
		height: 80%;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	button {
		/* width: 5rem; */
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

		font-weight: bold;
		opacity: 0.9;
	}
	h2,
	p {
		text-align: center;
	}

	.icons {
		width: 40%;
		height: 20%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* border: solid red; */
	}

	.icon {
		/* border: solid red; */
		height: 100%;
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.react_icon {
		height: 2rem;
		width: 2rem;
		color: var(--paleBlue);
		/* border: solid blue; */
	}

	@media screen and (max-width: 1000px) {
		/* border: solid red; */
		height: 45vh;
		.container {
			/* border: solid red; */
			height: 80%;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		button {
			height: 2.8rem;
			width: 9rem;
		}
	}

	@media screen and (max-width: 720px) {
		height: 60vh;
		/* border: solid red; */
		.container {
			/* border: solid red; */
			height: 80%;
			width: 60%;
			h2 {
				font-size: 1.3rem;
			}
			p {
				font-size: 0.9rem;
			}
		}

		button {
			height: 2.8rem;
			width: 9rem;
		}
	}

	@media screen and (max-width: 550px) {
		height: 60vh;
		.container {
			/* border: solid red; */
			height: 80%;
			width: 60%;
			h2 {
				font-size: 1rem;
			}
			p {
				font-size: 0.8rem;
			}
		}

		button {
			height: 2.6rem;
			width: 8rem;
		}
		.icons {
			width: 70%;
			height: 20%;
		}

		.react_icon {
			height: 1.7rem;
			width: 1.7rem;
			color: var(--paleBlue);
			/* border: solid blue; */
		}
	}

	@media screen and (max-width: 850px) and (max-height: 1100px) {
		height: 50vh;
		.container {
			/* border: solid red; */
			height: 56%;
			h2 {
				font-size: 0.9rem;
			}
			p {
				font-size: 0.7rem;
			}

			button {
				height: 2.2rem;
				width: 7rem;
			}
			.icons {
				/* border: solid blue; */
				width: 70%;
				height: 20%;
			}

			.react_icon {
				margin-top: 1rem;
				height: 1.3rem;
				width: 1.3rem;
				color: var(--paleBlue);
				/* border: solid blue; */
			}
		}
	}
`;

export default Contact;
