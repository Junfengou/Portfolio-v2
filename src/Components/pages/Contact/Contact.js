import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";

function Contact() {
	return (
		<Wrapper>
			<div className="container">
				<h2>Let's build something together!</h2>
				<p>
					I am actively looking for projects and open for any opportunities. If
					you're interested, you can react me here!
				</p>
				<a href="mailto:junfengou@gmail.com">
					<button>Contact me!</button>
				</a>
				<div className="icons">
					<div className="icon">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/junfeng.ou.3/"
						>
							<FaFacebook className="react_icon" />
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
					{/* <RiInstagramFill className="icon" />
					<ImGithub className="icon" /> */}
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
		height: 50vh;
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
`;

export default Contact;
