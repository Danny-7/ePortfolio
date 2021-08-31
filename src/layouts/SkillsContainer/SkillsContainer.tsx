import React from 'react'
import SkillContainer from "../../components/SkillContainer";

import { Container } from './styles';
import { skills } from "../../utils";

const SkillsContainer = () => {
    return (
        <React.Fragment>
            <Container>
                {skills.map((skill, index) => (
                    <SkillContainer
                        key={index}
                        src={skill.src}
                        alt={skill.alt}
                        level={skill.level}
                    />
                ))}
            </Container>
        </React.Fragment>
    )
}

export default SkillsContainer;
