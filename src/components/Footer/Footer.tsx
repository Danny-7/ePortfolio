import React, {MouseEvent} from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FooterWrapper, LanguageSwitcher, LanguageSwitcherContainer } from './styles';

const Footer = () => {
    const { t } = useTranslation();

    const changeLanguage = (e:MouseEvent<HTMLButtonElement>, lang:string) => {
        e.preventDefault();
        const asyncChangeLanguage = async () => {
            await i18next.changeLanguage(lang);
        }
        asyncChangeLanguage();
    }

    return (
        <React.Fragment>
            <FooterWrapper>
                <LanguageSwitcherContainer>
                    <LanguageSwitcher onClick={e => changeLanguage(e, 'en')}>
                        <span>EN</span>
                        <img src={require("../../assets/languages/united-kingdom.svg")}/>
                    </LanguageSwitcher> 
                    <LanguageSwitcher onClick={e => changeLanguage(e, 'fr')}>
                        <span>FR</span>
                        <img src={require("../../assets/languages/france.svg")}/>   
                    </LanguageSwitcher>
                </LanguageSwitcherContainer>
                 
                <p>
                    Daniel Aguiar | {new Date().getFullYear()} | {t('Footer') + ' '} 
                    &copy;
                </p>
            </FooterWrapper>
        </React.Fragment>
    );
};

export default Footer;
