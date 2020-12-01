import React from "react";
import styled from "styled-components";

function Fourth() {
	return (
		<Wrapper>
			<p>Fourth page</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid yellow; */
	/* width: 100vw; */
	height: 50vh;
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;

export default Fourth;
