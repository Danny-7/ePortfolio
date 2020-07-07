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

    .description {
      text-align: center;
    }
  `;

  return (
    <Container>
      {languages.map((lang) => (
        <div>
          <LangBadge src={lang.src} alt={lang.alt} />
          <div className="description">{lang.object}</div>
        </div>
      ))}
    </Container>
  );
};

export default LanguagesContainer;
