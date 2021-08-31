import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const AboutContainer = () => {
    const { t } = useTranslation();
    const keys = ['First about paragraph', 'Second about paragraph', 'Third about paragraph', 'Fourth about paragraph', 'Fifth about paragraph'];

    const text = keys.map((item, index) => (
        <React.Fragment key={index}>
            {t([item])}
            <br />
            <br />
        </React.Fragment>
    ));

    return (
        <React.Fragment>
            <Container>{text}</Container>
        </React.Fragment>
    );
}

export default AboutContainer
