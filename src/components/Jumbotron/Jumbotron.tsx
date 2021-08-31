import React from 'react'
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import './Jumbotron.css';

const Jumbotron = () => {
    const { t } = useTranslation();

    return (
        <div className="header">
            <div className="header-description">
                <p>{t('First jumbo sentence')}</p>
                <br />
                <p>{t('Second jumbo sentence')}</p>
                <br />
                <p>{t('Third jumbo sentence')}</p>
                <div className="button">
                    <Link
                        className="header-btn"
                        to={"A propos".toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        {t('Jumbotron button')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
