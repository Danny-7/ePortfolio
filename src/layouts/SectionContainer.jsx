import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(23, 23, 23, 0.25);
  border-radius: 18px;
  max-width: 70%;
  margin: 30px;
  padding: 15px;
`;

const SectionContainer = ({ content }) => {
  return <Container>{content}</Container>;
};

export default SectionContainer;
