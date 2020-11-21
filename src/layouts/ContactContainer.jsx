import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 120px;
  width: 30vw;
  a {
    color: grey;
  }

  .contact-logo {
    transition-duration: 0.4s;

    &:hover {
      transform: scale(1.15);
    }
  }

  @media screen and (max-width: 1440) {
    width: 50vw;
  }

  @media screen and (max-width: 768px) {
    width: 60vw;
  }

`;

const ContactContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <li className="contact-logo">
          <a 
            href="https://github.com/Danny-7" 
            title="Voir mes projets !" 
            target="blank">
            <i className="fa fa-github fa-10x" aria-hidden="true"></i>
          </a>
        </li>
        <li className="contact-logo">
          <a
            href="mailto:daniel.aguiar@outlook.fr"
            title="Envoyer un mail !"
            target="blank"
          >
            <i className="fa fa-envelope fa-10x" aria-hidden="true"></i>
          </a>
        </li>
        <li className="contact-logo">
          <a
            href="https://www.linkedin.com/in/daniel-aguiar7/"
            title="Me contacter sur LinkedIn !"
            target="blank"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
      </Container>
    </React.Fragment>
  );
};

export default ContactContainer;
