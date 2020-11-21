import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const AboutContainer = ({ about }) => {
  const text = about.map((item) => (
    <React.Fragment>
      {item}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <Container>{text}</Container>
    </React.Fragment>
  );
};

export default AboutContainer;
