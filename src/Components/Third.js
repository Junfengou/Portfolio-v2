import React from "react";
import styled from "styled-components";
import covid from "../images/projects/virus.png";
import github from "../images/projects/git.png";
import fish from "../images/projects/catch.png";
import social from "../images/projects/social.png";
import { DiGithubAlt } from "react-icons/di";
import { BsFolderSymlink } from "react-icons/bs";

function Third() {
	return (
		<Wrapper>
			<div className="title">
				<h1>
					Some things I worked on <span className="divider" />
				</h1>
			</div>

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={github} alt="github" />{" "}
				</div>
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
							href="https://github.com/Junfengou/Github-Clone-Dark-react"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a target="_blank" href="">
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>

			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={fish} alt="github" />{" "}
				</div>
				<div className="project__info">
					<div className="title__wrapper">
						<h2>
							Restaurant Menu <span className="divider-2" />
						</h2>
					</div>
					<div className="text__wrapper">
						<div className="text">
							<p>
								A menu like application built with React and hosted on Firebase.
								Maybe I'll start my own restaurant one day...
							</p>
						</div>
					</div>

					<div className="links">
						<a
							target="_blank"
							href="https://github.com/Junfengou/Catch-of-the-day"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a target="_blank" href=" https://fresh-catch-756af.web.app/">
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>

			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={covid} alt="github" />{" "}
				</div>
				<div className="project__info">
					<div className="title__wrapper">
						<h2>
							Coronavirus Tracker <span className="divider-2" />
						</h2>
					</div>
					<div className="text__wrapper">
						<div className="text">
							<p>
								Coronavirus is like the new zombie apocalypse, everyone is
								afraid to go outside.If you're curious how bad the virus is,
								check out this application I made that keeps track of COVID
								cases in United States and worldwide.
							</p>
						</div>
					</div>

					<div className="links">
						<a
							target="_blank"
							href="https://github.com/Junfengou/Covid-tracker-light-react"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a target="_blank" href="">
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>

			{/**--------------------------------------- */}

			<div className="project__wrapper">
				<div className="img__wrapper">
					<img src={social} alt="github" />{" "}
				</div>
				<div className="project__info">
					<div className="title__wrapper">
						<h2>
							Social media platform <span className="divider-2" />
						</h2>
					</div>
					<div className="text__wrapper">
						<div className="text">
							<p>
								This is my first web application I made while learning Python
								and Django. A simple social media platform where users can post
								contents on anything.
							</p>
						</div>
					</div>

					<div className="links">
						<a
							target="_blank"
							href="https://github.com/Junfengou/Social-media-company"
						>
							<DiGithubAlt className="Gitcon" />
						</a>
						<a target="_blank" href="http://marshpillow.pythonanywhere.com/">
							<BsFolderSymlink className="Foldercon" />
						</a>
					</div>
				</div>
			</div>

			{/* <div className="project__wrapper"></div> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid green; */
	/* width: 100vw; */
	height: 270vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: var(--darkGrey);
	flex-direction: column;
	/* align-items: center; */

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
	}

	/* .filter {
		border: solid red;
		background-image: linear-gradient(120deg, #a1c4fd 100%, #c2e9fb 100%);
		z-index: inherit;
	} */

	.img__wrapper {
		/* border: solid blue; */
		height: 85%;
		width: 70%;
		overflow: hidden;

		img {
			height: 30rem;
			object-fit: contain;
			border-radius: 5%;
			filter: invert(15%);
		}

		img:hover {
			filter: none;
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
`;

export default Third;
