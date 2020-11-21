import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header-description">
        <p>Bonjour, je suis Daniel Aguiar</p>
        <br />
        <p>Un étudiant en informatique</p>
        <br />
        <p>Vous voulez me découvrir alors cliquez sur le bouton ci-dessous !</p>
        <div className="button">
            <Link
            className="header-btn"
              to={"A propos".toLowerCase()}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              En savoir plus
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
