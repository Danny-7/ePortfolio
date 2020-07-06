import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e7e7e7;
  border-radius: 15px;
  width: 500px;
  height: 75px;
  margin: 50px;

  .title {
    margin: 0;
    font-weight: bold;
    font-size: 48px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(213, 142, 189, 1) 44%,
      rgba(0, 212, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-bar {
    margin-top: 5px;
    width: 284px;
    height: 0px;
    border: 1px solid #b9aeae;
  }
`;

const SectionTitle = ({ title }) => {
  return (
    <TitleContainer id={title.toLowerCase()}>
      <h1 className="title">{title}</h1>
      <span className="title-bar"></span>
    </TitleContainer>
  );
};

export default SectionTitle;
