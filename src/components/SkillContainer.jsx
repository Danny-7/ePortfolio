import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: #f9f7f7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  width: 302px;
  margin: 30px;

  .img {
    max-height: 60px;
    max-width: 150px;
  }
  .circular-progress-bar-container {
    width: 70px;
    margin: 15px;
  }
`;

const SkillContainer = ({ src, alt, level }) => {
  const circularColor = level < 30 ? "red" : level < 50 ? "blue" : "green";

  return (
    <SkillWrapper>
      <img
        className="img"
        src={require(`../assets/skills/${src}`)}
        alt={alt}
      ></img>
      <div className="circular-progress-bar-container">
        <CircularProgressbar
          value={level}
          text={`${level}%`}
          styles={buildStyles({
            pathColor: circularColor,
          })}
        />
      </div>
    </SkillWrapper>
  );
};

export default SkillContainer;
