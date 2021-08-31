import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { aboutTranslations } from './utils';

const enAbout = aboutTranslations.enAbout;
const frAbout = aboutTranslations.frAbout;

const resources = {
    en: {
        translation: {
            "About me": "About me",
            "Skills": "Skills",
            "Languages": "Languages",
            "Contact": "Contact",
            "First jumbo sentence": "Hi 👋, I'm Daniel Aguiar",
            "Second jumbo sentence": "A computer science student",
            "Third jumbo sentence": "To find more about me, click on the following button !",
            "Jumbotron button": "Find more about",
            "First about paragraph": enAbout[0],
            "Second about paragraph": enAbout[1],
            "Third about paragraph": enAbout[2],
            "Fourth about paragraph": enAbout[3],
            "Fifth about paragraph": enAbout[4],
            "Professional": "Professional",
            "Intermediate": "Intermediate",
            "Bilingual": "Bilingual",
            'Footer': "All rights reserved"

        }
    },
    fr: {
        translation: {
            "About me": "A propos",
            "Skills": "Compétences",
            "Languages": "Langues",
            "Contact": "Contact",
            "First jumbo sentence": "Slt 👋, je suis Daniel Aguiar",
            "Second jumbo sentence": "Un étudiant en informatique",
            "Third jumbo sentence": "Vous voulez me découvrir alors cliquez sur le bouton ci--dessous !",
            "Jumbotron button": "En savoir plus",
            "First about paragraph": frAbout[0],
            "Second about paragraph": frAbout[1],
            "Third about paragraph": frAbout[2],
            "Fourth about paragraph": frAbout[3],
            "Fifth about paragraph": frAbout[4],
            "Professional": "Professionel",
            "Intermediate": "Intermédiaire",
            "Bilingual": "Bilingue",
            'Footer': "Tous droits réservés"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;