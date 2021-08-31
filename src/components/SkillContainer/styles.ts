import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: #f9f7f7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  width: 40%;
  margin: 30px;
  transition-duration : 0.4s;

  &:hover {
    transform: scale(1.1);
  }

  .logo {
    max-height: 60px;
    max-width: 150px;
  }

  .circular-progress-bar-container {
    width: 70px;
    margin: 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 25%;
  }

  @media screen and (max-width: 900px) {
    margin: 30px auto;
    width: 60%;
  }

  @media screen and (max-width: 560px) {
    width: 80%;
  }
`;