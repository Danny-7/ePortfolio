import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import { StyledLink } from './styles';
import './Header.css';
import { Translation } from 'react-i18next';

const links = [
    {
        name: "About me",
        path: "about"
    },
    {
        name: "Skills",
        path: "skills"
    },
    {
        name: "Languages",
        path: "languages"
    },
    {
        name: "Contact",
        path: "contact"
    },

];

const navLinks = links.map((link, index) => (
    <li key={index}>
        <StyledLink
            className="navbar-link-item"
            to={link.path.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            <Translation>{t => t(link.name)}</Translation>
        </StyledLink>
    </li>
));

const scrollToTop = () => {
    scroll.scrollToTop();
};

const Header = () => {
    return (
        <React.Fragment>
            <div className="nav-wrapper">
                <div className="grad-bar"></div>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <p onClick={scrollToTop}>ePortfolio</p>
                    </div>
                    <ul>{navLinks}</ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Header;
