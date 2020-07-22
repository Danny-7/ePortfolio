import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "../styles/HeaderStyle.scss";

const StyledLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <div className="header">
      <div className="header-description">
        <p>Bonjour, je suis Daniel</p>
        <br />
        <p> Etudiant en informatique </p>
        <br />
        <p>Vous voulez me découvrir alors cliquez sur le bouton ci-dessous !</p>
        <div className="button">
          <button className="header-btn">
            <StyledLink
              to={"A propos".toLowerCase()}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              En savoir plus
            </StyledLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
