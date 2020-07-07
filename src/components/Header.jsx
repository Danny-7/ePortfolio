import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.png";
import { Link } from "react-scroll";

const ParagraphStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: white;
  font-size: 30px;
  text-shadow: 5px 2px 19px rgba(150, 150, 150, 1);
  width: 600px;
  height: 325px;
  margin-left: 50px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.06);

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  text-decoration: none;
  font-size: 18px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(213, 142, 189, 1) 44%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  justify-self: center;

  &:focus {
    outline: none;
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`;

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
    <HeaderStyled>
      <ParagraphStyled>
        <p>Bonjour, je suis Daniel</p>
        <br />
        <p> Etudiant en informatique </p>
        <br />
        <p>Vous voulez me découvrir alors cliquez sur le bouton ci-dessous !</p>
        <div className="button">
          <Button>
            <StyledLink
              to={"A propos".toLowerCase()}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              En savoir plus
            </StyledLink>
          </Button>
        </div>
      </ParagraphStyled>
    </HeaderStyled>
  );
};

export default Header;
