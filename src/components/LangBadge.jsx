import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  width: 137px;
  height: 124px;
  margin: 15px;
  background: #f9f7f7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  .lang-img {
    width: 137px;
    height: 124px;
    border-radius: 50%;
    text-align: center;
  }
`;

const LangBadge = ({ src, alt }) => {
  return (
    <Badge>
      <img
        className="lang-img"
        src={require(`../assets/languages/${src}`)}
        alt={alt}
      ></img>
    </Badge>
  );
};

export default LangBadge;
