import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
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

export const LanguageSwitcher = styled.button`
  display: flex;
  justify-content: space-between;
  width: 75px;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  box-shadow: 1px 1px 3px 3px rgba(17,17,17,0.2);
  background-color: rgb(230, 230, 230);
  text-shadow:   -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
     1px 1px 0 #fff,
     1px 1px 10px #141414;color:#333;

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const LanguageSwitcherContainer = styled.div`
  width: 200px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;