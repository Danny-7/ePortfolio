import styled from "styled-components";

export const Container = styled.ul`
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