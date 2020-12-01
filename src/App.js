import React, { useContext } from "react";
import Main from "./Components/Main";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import { Section, SectionsSpy } from "react-smart-sections";
import "./App.css";

function App() {
	return (
		<div className="app">
			{/* <Home /> */}
			<Section name="ABOUT">
				<Main />
			</Section>

			<Section name="SKILLS">
				<Second />
			</Section>

			<Section name="WHAT I DO">
				<Third />
			</Section>

			<Section name="HMM">
				<Fourth />
			</Section>

			<SectionsSpy
				render={(sections) => (
					<div className="navigation__wrapper">
						{sections.map((section) => (
							<div className="bubbles__wrapper">
								<button
									onClick={section.scroll}
									className={section.active ? "isActive" : "circle"}
									// className="circle"
								>
									{section.name}
								</button>
								<p className={section.active ? "showName" : "showNothing"}>
									{section.name}
								</p>
							</div>
						))}
					</div>
				)}
			/>
		</div>
	);
}

export default App;

{
	/**
<SectionsSpy
				render={(sections) => (
					<div className="navigation">
						{sections.map((section) => (
							<div className="bubbles__wrapper">
								<button
									onClick={section.scroll}
									className={section.active ? "isActive" : "circle"}
									// className="circle"
								>
									{section.name}
								</button>
								<p className={section.active ? "showName" : "showNothing"}>
									{section.name}
								</p>
							</div>
						))}
					</div>
				)}
			/>

*/
}
