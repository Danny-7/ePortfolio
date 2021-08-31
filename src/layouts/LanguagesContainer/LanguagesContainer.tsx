import React from 'react'
import { useTranslation } from 'react-i18next';
import LangBadge from "../../components/LangBadge";
import { languages } from '../../utils';
import { Container } from './styles';

const LanguagesContainer = () => {
    const { t } = useTranslation();

    return (
        <Container>
            {languages.map((lang, index) => (
                <div key={index}>
                    <LangBadge src={lang.src} alt={lang.alt} />
                    <div className="description">{t(lang.object)}</div>
                </div>
            ))}
        </Container>
    );
};

export default LanguagesContainer;
