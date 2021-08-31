import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SkillWrapper } from './styles';

type AppProps = {
    src: string,
    alt: string,
    level: number
};

const SkillContainer = ({ src, alt, level }: AppProps) => {
    const circularColor: string = level < 30 ? "red" : level < 50 ? "blue" : "green";

    return (
        <SkillWrapper>
            <img
                className="logo"
                src={require(`../../assets/skills/${src}`)}
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
    )
}

export default SkillContainer
