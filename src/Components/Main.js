import React from "react";
import styled from "styled-components";
import Second from "./Second";

function Main() {
	return (
		<Wrapper>
			<div className="box">
				<p>Main page</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border: solid red;
	/* width: 100vw; */
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.box {
		/* border: solid blue; */
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	/* align-items: center; */
`;

export default Main;
