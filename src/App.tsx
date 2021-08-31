import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import SectionTitle from "./components/SectionTitle";
import SectionContainer from "./layouts/SectionContainer";
import AboutContainer from "./layouts/AboutContainer";
import SkillsContainer from "./layouts/SkillsContainer";
import LanguagesContainer from "./layouts/LanguagesContainer";
import ContactContainer from "./layouts/ContactContainer";
import Footer from "./components/Footer";

import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    return (
        <Router>
            <div>
                <Header />
                <Jumbotron />
                <div className="content">
                    <SectionTitle title={t('About me')} path="about" />
                    <SectionContainer content={<AboutContainer/>} />
                    <SectionTitle title={t('Skills')} path="skills" />
                    <SectionContainer content={<SkillsContainer />} />
                    <SectionTitle title={t('Languages')} path="languages" />
                    <SectionContainer content={<LanguagesContainer />} />
                    <SectionTitle title={t('Contact')} path="contact" />
                    <SectionContainer content={<ContactContainer />} />
                    <Footer />
                </div>
            </div>
        </Router >
    )
}

export default App
