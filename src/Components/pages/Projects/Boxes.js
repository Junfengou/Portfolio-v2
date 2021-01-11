import React from "react";
import styled from "styled-components";
import { DiGithubAlt } from "react-icons/di";

function Boxes({ title, desc, github }) {
	return (
		<Wrapper>
			<div className="head">
				<h2>{title}</h2>
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
	width: 70%;
	height: 60%;
	border: solid thin var(--sealthGrey);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 2%;
	color: var(--offWhite);
	h2,
	p {
		margin-left: 1.5rem;
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
`;

export default Boxes;
