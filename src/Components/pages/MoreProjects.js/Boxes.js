import React from "react";
import styled from "styled-components";
import { DiGithubAlt } from "react-icons/di";

function Boxes({ title, desc, github }) {
	return (
		<Wrapper>
			<div className="head">
				<h2>{title} 🔨</h2>
			</div>
			<div className="body">
				<p>{desc}</p>
			</div>
			<div className="tail">
				<a target="_blank" rel="noreferrer" href={github}>
					<DiGithubAlt className="Gitcon" />
				</a>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 75%;
	height: 65%;
	border: solid thin var(--sealthGrey);
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 2%;
	margin-left: 5rem;
	color: var(--offWhite);
	font-family: "Kanit", sans-serif;
	h2,
	p {
		margin-left: 1.5rem;
		font-size: 1rem;
	}
	.head {
		/* border: solid blue; */
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.body {
		/* border: solid blue; */
		width: 100%;
		height: 40%;
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
	}
	.tail {
		/* border: solid blue; */
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Gitcon {
		/* border: solid red; */
		height: 2rem;
		width: 2rem;
		text-decoration: none;
		color: var(--white);
	}

	@media screen and (max-width: 1200px) {
		width: 70%;
		height: 60%;
		margin-left: 4rem;
		h2,
		p {
			font-size: 1.1rem;
		}
	}

	@media screen and (max-width: 800px) {
		margin-top: 0.5rem;
		margin-left: 6rem;
		width: 65%;
		height: 60%;
		h2,
		p {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 600px) {
		margin-top: 0.5rem;
		width: 75%;
		height: 60%;
		margin-left: 2.3rem;
	}

	@media screen and (max-width: 400px) {
		margin-top: 0.5rem;
		margin-left: 3rem;
		width: 75%;
		height: 60%;
		margin-left: 2rem;
	}
`;

export default Boxes;
