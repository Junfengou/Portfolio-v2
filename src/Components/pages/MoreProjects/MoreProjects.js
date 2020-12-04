import React from "react";
import styled from "styled-components";

function MoreProjects() {
	return (
		<Wrapper>
			<h3>Netflix, E-commerce, </h3>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 40vh;
	background: var(--darkGrey);
	color: var(--white);
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid red;
`;
export default MoreProjects;
