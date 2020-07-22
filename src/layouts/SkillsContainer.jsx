import React from "react";
import SkillContainer from "../components/SkillContainer";
import styled from "styled-components";
import { skills } from "../utils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SkillsContainer = () => {
  return (
    <React.Fragment>
      <Container>
        {skills.map((skill) => (
          <SkillContainer
            className="skill"
            src={skill.src}
            alt={skill.alt}
            level={skill.level}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default SkillsContainer;
