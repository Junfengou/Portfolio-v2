import React from "react";
import styled from "styled-components";

function Bubble({ data }) {
	return (
		<Wrapper>
			<h4>{data}</h4>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 6rem;
	height: 6rem;
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

	@media screen and (max-width: 300px) {
		width: 4.5rem;
		height: 4.5rem;

		h4 {
			font-size: 0.7rem;
		}
	}
`;
export default Bubble;
