import React from "react";
import styled from "styled-components";
import covid from "../../../images/gifs/cov.gif";
import github from "../../../images/gifs/git.gif";
import sick from "../../../images/gifs/sick.gif";
import netflix from "../../../images/gifs/net.gif";
import shop from "../../../images/projects/shop.png";

import { DiGithubAlt } from "react-icons/di";
import { BsFolderSymlink } from "react-icons/bs";

import Roll from "react-reveal/Roll";

function Third() {
	return (
		<Wrapper>
			<div className="title">
				<h1>
					Some things I worked on 🔧
					<span className="divider" />
				</h1>
			</div>

			<div className="project__wrapper">
				<Roll left>
					<div className="img__wrapper">
						<img src={github} alt="github" />{" "}
					</div>
				</Roll>
				<div className="project__info">
					<div className="title__wrapper">
						<h2>
							Github user tracker
							<span className="divider-2" />
						</h2>
					</div>
					<div className="text__wrapper">
						<div className="text">
							<p>
								Ever find Github a bit annoying to navigate? Well look no
								further! I've created a website that allows you to creep on any
								Github users
							</p>
						</div>
					</div>

					<div className="links">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Junfengou/Github-Clone-Dark-react"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github-tracker-bd553.web.app/"
						>
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>
			<hr />

			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={sick} alt="github" />{" "}
				</div>
				<Roll right>
					<div className="project__info">
						<div className="title__wrapper">
							<h2>
								Sick Fits Online Store <span className="divider-2" />
							</h2>
						</div>
						<div className="text__wrapper">
							<div className="text">
								<p>
									Wes Bos' fullstack course built with React, Apollo, Graphql
									and bunch of other goodies in the mix!
								</p>
							</div>
						</div>

						<div className="links">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/Junfengou/Sick-fits-react"
							>
								<DiGithubAlt className="Gitcon" />
							</a>
							<a target="_blank" rel="noreferrer" href="#">
								<BsFolderSymlink className="Foldercon" />
							</a>
						</div>
					</div>
				</Roll>
			</div>
			<hr />

			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<Roll left>
					<div className="img__wrapper">
						<img src={covid} alt="github" />{" "}
					</div>
				</Roll>
				<div className="project__info">
					<div className="title__wrapper">
						<h2>
							Coronavirus Tracker <span className="divider-2" />
						</h2>
					</div>
					<div className="text__wrapper">
						<div className="text">
							<p>
								If you're curious how bad the virus is, check out this
								application I made that keeps track of COVID cases in United
								States and worldwide.
							</p>
						</div>
					</div>

					<div className="links">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Junfengou/Covid-tracker-light-react"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://covidtracker-c62c2.web.app/"
						>
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>
			<hr />
			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={netflix} alt="github" />{" "}
				</div>
				<Roll right>
					<div className="project__info">
						<div className="title__wrapper">
							<h2>
								Netflix clone <br />
								<span className="divider-2" />
							</h2>
						</div>
						<div className="text__wrapper">
							<div className="text">
								<p>
									A netflix clone with all the latest movies and shows displayed
									on the big screen. Nothing too crazy, just something to
									practice css
								</p>
							</div>
						</div>

						<div className="links">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/Junfengou/Netflix-clone-react"
							>
								<DiGithubAlt className="Gitcon" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://netflix-clone-ff957.web.app/"
							>
								<BsFolderSymlink className="Foldercon" />
							</a>
						</div>
					</div>
				</Roll>
			</div>
			<hr />
			{/**--------------------------------------- */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid green; */
	/* width: 100vw; */
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--darkGrey);
	flex-direction: column;
	font-family: "Kanit", sans-serif;

	hr {
		width: 30%;
		background-color: #eee;
		border: 0 none;
		color: #eee;
		height: 1px;
	}
	.title {
		/* border: solid red; */
		height: 7rem;
		color: var(--white);
	}

	.divider {
		border: solid var(--paleBlue);
		background-color: var(--paleBlue);
		height: 1px;
		width: 15rem;
		display: block;
	}

	.divider-2 {
		border: solid var(--paleBlue);
		background-color: var(--paleBlue);
		height: 1px;
		width: 9rem;
		display: block;
		float: right;
	}

	.project__wrapper {
		/* border: solid red; */
		height: 35rem;
		width: 65rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: var(--white);
		margin-top: 1.5rem;
	}

	/* .filter {
		border: solid red;
		background-image: linear-gradient(120deg, #a1c4fd 100%, #c2e9fb 100%);
		z-index: inherit;
	} */

	.img__wrapper {
		/* border: solid blue; */
		height: 55%;
		width: 45%;
		overflow: hidden;

		img {
			height: 18rem;
			width: 30rem;
			object-fit: contain;
			border-radius: 2%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.project__info {
		/* border: solid green; */
		height: 85%;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.title__wrapper {
		/* border: solid red; */
		height: 20%;
		/* display: flex;
		justify-content: center;
		align-items: center; */
		text-align: right;
		width: 100%;

		p {
			margin-top: 2rem;
		}
	}
	.text__wrapper {
		/* border: solid blue; */
		height: 25%;
		width: 150%;
		border-radius: 2%;
		margin-right: 7.5rem;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		background-color: var(--sealthGrey);
		color: var(--black);
		opacity: 0.8;

		.text {
			/* border: solid red; */
			margin: 1rem;
		}

		p {
			margin-left: 1rem;
			opacity: 2;
			color: var(--white);
		}
	}
	.links {
		/* border: solid pink; */
		height: 10%;
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: right;
		margin-left: 14rem;

		.Gitcon {
			/* border: solid red; */
			height: 3rem;
			width: 3rem;
			text-decoration: none;
			color: var(--white);
		}

		.Foldercon {
			height: 2.2rem;
			width: 2.2rem;
			text-decoration: none;
			color: var(--white);
		}

		h1 {
			margin-top: 2rem;
			text-align: right;
		}
	}

	@media screen and (max-width: 1500px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.project__wrapper {
			/* border: solid red; */
			height: 30rem;
			width: 55rem;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			color: var(--white);
		}

		.img__wrapper {
			/* border: solid blue; */
			height: 100%;
			width: 70%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				height: 25rem;
			}
		}

		.title__wrapper {
			/* border: solid blue; */
			height: 17%;
			text-align: right;
			width: 100%;
		}

		.text__wrapper {
			/* border: solid blue; */
			height: 22%;
		}

		.links {
			/* border: solid pink; */
			margin-left: 10rem;
			justify-content: space-evenly;

			.Gitcon {
				/* border: solid red; */
				height: 2.6rem;
				width: 2.6rem;
				text-decoration: none;
				color: var(--white);
			}

			.Foldercon {
				height: 2rem;
				width: 2rem;
				text-decoration: none;
				color: var(--white);
			}

			h1 {
				margin-top: 2rem;
				text-align: right;
			}
		}

		.box_section {
			/* margin-top: 1.5rem; */
			/* border: solid red; */
			width: 80%;
			height: 50rem;

			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			justify-items: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 1100px) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.divider-2 {
			display: none;
		}

		.title {
			/* border: solid red; */
			height: 7rem;
			font-size: 0.8rem;
			color: var(--white);
		}

		.project__wrapper {
			/* border: solid thin var(--sealthGrey); */
			border-radius: 5%;
			height: 19%;
			width: 80%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-direction: column;
			color: var(--white);
		}

		.img__wrapper {
			/* border: solid blue; */
			height: 50%;
			width: 80%;
			border-radius: 3%;

			img {
				height: 22rem;
			}
		}

		.project__info {
			/* border: solid red; */
			height: 40%;
			width: 80%;
			/* background-color: var(--sealthGrey); */
			border-radius: 2%;
		}

		.title__wrapper {
			/* border: solid blue; */
			height: 15%;
			width: 50%;
			text-align: center;
			h2 {
				font-size: 1rem;
			}
		}
		.text__wrapper {
			/* border: solid white; */
			height: 50%;
			width: 100%;
			margin-right: 0rem;
			display: flex;
			/* justify-content: center; */
			align-items: center;
			background-color: transparent;
			color: var(--black);
			opacity: 0.8;
		}
		.links {
			height: 10%;
			margin-left: 0rem;
			justify-content: space-evenly;

			.Gitcon {
				/* border: solid red; */
				height: 2.2rem;
				width: 2.2rem;
				text-decoration: none;
				color: var(--white);
			}

			.Foldercon {
				height: 1.7rem;
				width: 1.7rem;
				text-decoration: none;
				color: var(--white);
			}
		}
	}

	@media screen and (max-width: 800px) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.box_section {
			margin-top: 1.5rem;
			border: solid red;
			width: 80%;
			height: 50rem;

			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			justify-items: center;
			align-items: center;
		}
		/* height: 650vh; */
	}

	@media screen and (max-width: 700px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title__wrapper {
			h2 {
				font-size: 0.9rem;
			}
		}

		.text {
			p {
				font-size: 0.9rem;
				text-align: left;
				margin: 0rem;
			}
		}
	}

	@media screen and (max-width: 400px) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			h1 {
				font-size: 1.3rem;
			}
		}

		.divider-2 {
			display: none;
		}
		.project__info {
			/* border: solid red; */
			width: 100%;
			/* background-color: var(--sealthGrey); */
			border-radius: 2%;
		}

		.img__wrapper {
			/* border: solid blue; */
			height: 50%;
			width: 100%;
			border-radius: 3%;

			img {
				height: 22rem;
			}
		}

		.title__wrapper {
			width: 100%;
			/* border: solid blue; */
			h2 {
				font-size: 0.9rem;
			}
		}

		.text {
			/* display: none; */
			/* border: solid white; */
			p {
				font-size: 0.7rem;
				margin: 0rem;
			}
		}
	}
	@media screen and (max-width: 850px) and (max-height: 450px) {
		height: 900vh;
		.project__wrapper {
			/* border: solid red; */
			height: 35%;
			width: 60%;
		}
		/* height: 300vh; */
	}
`;

export default Third;
