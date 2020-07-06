import React from "react";
import styled from "styled-components";
import LangBadge from "../components/LangBadge";
import { languages } from "../utils";

const LanguagesContainer = () => {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px;
  `;

  return (
    <Container>
      {languages.map((lang) => (
        <LangBadge src={lang.src} alt={lang.alt} />
      ))}
    </Container>
  );
};

export default LanguagesContainer;
