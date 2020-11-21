import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: #3498db;
  }
`;

const links = ["A propos", "Compétences", "Langues", "Contact"];
const navLinks = links.map((link) => (
  <li>
    <StyledLink
      className="navbar-link-item"
      to={link.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
    >
      {link}
    </StyledLink>
  </li>
));

const scrollToTop = () => {
  scroll.scrollToTop();
};

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <div className="navbar-logo">
            <p onClick={scrollToTop}>ePortfolio</p>
          </div>
          <ul className="navbar-link">{navLinks}</ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
