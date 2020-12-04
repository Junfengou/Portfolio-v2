import React, { useContext } from "react";
import Landing from "./Components/pages/Welcome/Main";
import AboutMe from "./Components/pages/AboutMe/Second";
import Skills from "./Components/pages/Skills/Fourth";
import MainProjects from "./Components/pages/Projects/Third";
import Contact from "./Components/pages/Contact/Contact";
import { Section, SectionsSpy } from "react-smart-sections";
import { Link } from "react-scroll";
import "./App.css";

function App() {
	return (
		<div className="app">
			{/* <Home /> */}
			{/* <Section name="WELCOME"> */}
			<Section name="WELCOME">
				<Landing />
			</Section>

			<Section name="ABOUT" id="about">
				<AboutMe />
			</Section>

			<Section name="SKILLS">
				<Skills />
			</Section>

			<Section name="PROJECTS">
				<MainProjects />
			</Section>

			{/* <Section name="CONTACT">
				<Contact />
			</Section> */}

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
								<a href={section.name} />{" "}
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
