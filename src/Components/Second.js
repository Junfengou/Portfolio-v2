import React from "react";
import styled from "styled-components";

function Second() {
	return (
		<Wrapper>
			<p>Second page</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid blue; */
	/* width: 100vw; */
	height: 100vh;
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;

export default Second;
