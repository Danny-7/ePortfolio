import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100vw;
  heigth: 7vh;
  position: fixed;
  top: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);

  .grad-bar {
    width: 100%;
    height: 7px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(213, 142, 189, 1) 44%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 7vh;
    margin: 0 auto;
  }

  .navbar-logo {
    margin-left: 100px;
    letter-spacing: 1px;
    font-size: 24px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(213, 142, 189, 1) 44%,
      rgba(0, 212, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }

  .navbar ul {
    display: flex;
    justify-self: end;
    align-items: center;
    width: 700px;
    margin-right: 50px;
  }

  .navbar-link {
    display: flex;
    justify-content: space-around;
  }
`;

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
      <NavWrapper>
        <div className="grad-bar"></div>
        <nav className="navbar">
          <div className="navbar-logo">
            <p onClick={scrollToTop}>ePortfolio</p>
          </div>
          <ul className="navbar-link">{navLinks}</ul>
        </nav>
      </NavWrapper>
    </React.Fragment>
  );
};

export default NavBar;
