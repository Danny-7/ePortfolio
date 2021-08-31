import React from 'react'
import { Badge } from './styles';

type AppProps = {
    src: string,
    alt: string
};

const LangBadge = ({ src, alt }: AppProps) => {
    return (
        <Badge>
            <img
                className="lang-img"
                src={require(`../../assets/languages/${src}`)}
                alt={alt}
            ></img>
        </Badge>
    );
};

export default LangBadge;
