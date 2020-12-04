import React from "react";
import styled from "styled-components";
import "./Main.css";
import { BsCaretDown } from "react-icons/bs";
import { Link } from "react-scroll";

function Main() {
	return (
		<Wrapper className="bg">
			<div className="box">
				<div className="text__wrapper">
					<h1>Junfeng Ou</h1>
					<h3>Front end developer</h3>
				</div>
				<div className="btn__wrapper">
					<Link to="about">
						<BsCaretDown className="icon" />
					</Link>
					<Link to="about"></Link>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid red; */
	/* width: 100vw; */
	height: 100vh;
	/* width: 100vw; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.box {
		/* border: solid blue; */
		height: 100vh;
		width: 100%;
		/* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
		background-image: linear-gradient(180deg, #a1c4fd 50%, #c2e9fb 100%);
		opacity: 0.7;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.text__wrapper {
		/* border: solid red; */
		width: 50%;
		height: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.btn__wrapper {
		/* border: solid green; */
		height: 3rem;
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 4rem;
		z-index: 2;
	}

	h3 {
		font-size: 1.5rem;
		/* border: solid red; */
		margin-top: -1.7rem;
	}
	/* align-items: center; */

	.icon {
		width: 3rem;
		height: 3rem;
		cursor: pointer;
	}

	@media screen and (max-width: 750px) {
		h1 {
			font-size: 3rem;
			z-index: 2;
		}

		h3 {
			font-size: 1.4rem;
			/* border: solid red; */
			margin-top: -1.7rem;
		}
	}

	@media screen and (max-width: 500px) {
		h1 {
			font-size: 2rem;
			z-index: 2;
		}

		h3 {
			font-size: 1.2rem;
			margin-top: 0.1rem;
			/* border: solid red; */
			/* margin-top: -1.7rem; */
		}
	}

	@media screen and (max-width: 380px) {
		h1 {
			font-size: 1.5rem;
			z-index: 2;
		}

		h3 {
			font-size: 1rem;
			margin-top: 0.1rem;
			/* border: solid red; */
			/* margin-top: -1.7rem; */
		}
	}

	@media screen and (max-width: 380px) {
		h3 {
			font-size: 0.8rem;
		}
	}
`;

export default Main;
