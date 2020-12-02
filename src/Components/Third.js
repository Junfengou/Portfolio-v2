import React from "react";
import styled from "styled-components";

function Third() {
	return (
		<Wrapper>
			<p>Third page</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border: solid green;
	/* width: 100vw; */
	height: 60vh;
	display: flex;
	justify-content: center;
	background: var(--darkGrey);
	/* align-items: center; */
`;

export default Third;
