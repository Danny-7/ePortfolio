import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100vw;
  heigth: 5vh;
  padding: 5px;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 30%,
      rgba(213, 142, 189, 1) 44%,
      rgba(0, 212, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrapper>
        <p>Daniel Aguiar | 2019 | Tous droits réservés &copy;</p>
      </FooterWrapper>
    </React.Fragment>
  );
};

export default Footer;
