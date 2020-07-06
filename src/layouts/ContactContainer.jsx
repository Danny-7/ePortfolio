import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 120px;
  min-width: 500px;

  a {
    color: grey;
  }
`;

const ContactContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <li>
          <a href="https://github.com/Danny-7" title="GitHub" target="blank">
            <i className="fa fa-github fa-10x" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:daniel.aguiar@outlook.fr"
            title="Envoyer un mail"
            target="blank"
          >
            <i className="fa fa-envelope fa-10x" aria-hidden="true"></i>
          </a>
        </li>
      </Container>
    </React.Fragment>
  );
};

export default ContactContainer;
