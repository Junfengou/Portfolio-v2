import React from "react";
import styled from "styled-components";
import "./Main.css";
import BG from "../images/MainBG.jpg";
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
					<button>
						<Link to="about">Scroll down</Link>
					</button>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid red; */
	/* width: 100vw; */
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.box {
		/* border: solid blue; */
		height: 100vh;
		width: 100%;
		/* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
		background-image: linear-gradient(120deg, #a1c4fd 100%, #c2e9fb 100%);
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
`;

export default Main;
