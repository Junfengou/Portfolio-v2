import React from "react";
import styled from "styled-components";
import RubberBand from "react-reveal/RubberBand";

function Bubble({ data }) {
	return (
		<Wrapper>
			<h4>{data}</h4>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 6.5rem;
	height: 6.5rem;
	border-radius: 100%;
	border: solid thin var(--sealthGrey);
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-left: 0.5rem; */
	/* opacity: 0.8; */
	h4 {
		font-size: 0.9rem;
	}

	@media screen and (max-width: 1000px) {
		width: 5.5rem;
		height: 5.5rem;

		h4 {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 450px) {
		width: 4.5rem;
		height: 4.5rem;

		h4 {
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 850px) and (max-height: 450px) {
		/* border: solid red; */
		width: 4.3rem;
		height: 4.3rem;

		h4 {
			font-size: 0.7rem;
		}
		/* height: 300vh; */
	}

	@media screen and (max-width: 300px) {
		width: 4.5rem;
		height: 4.5rem;

		h4 {
			font-size: 0.7rem;
		}
	}
`;
export default Bubble;
