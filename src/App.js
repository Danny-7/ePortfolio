import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import "./style.css";

import NavBar from "./components/header/NavBar";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import SectionContainer from "./layouts/SectionContainer";
import AboutContainer from "./layouts/AboutContainer";
import SkillsContainer from "./layouts/SkillsContainer";
import LanguagesContainer from "./layouts/LanguagesContainer";
import ContactContainer from "./layouts/ContactContainer";
import Footer from "./components/Footer";

import { about } from "./utils";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <AppContainer>
          <NavBar />
          <Header />
          <div className="content">
            <SectionTitle title="A propos" />
            <SectionContainer content={<AboutContainer about={about} />} />
            <SectionTitle title="Compétences" />
            <SectionContainer content={<SkillsContainer />} />
            <SectionTitle title="Langues" />
            <SectionContainer content={<LanguagesContainer />} />
            <SectionTitle title="Contact" />
            <SectionContainer content={<ContactContainer />} />
            <Footer />
          </div>
        </AppContainer>
      </React.Fragment>
    </Router>
  );
};

export default App;
