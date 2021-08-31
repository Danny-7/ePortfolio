export const aboutTranslations = {
    frAbout: [
        "L'informatique me passionnant depuis ma tendre enfance j'ai décidé de continuer dans cette voie pour en faire mon métier.",
        "Au cours des années de lycée, j'ai pu prendre connaissances de quelques langages de programmation comme le C, C++ et m'instruire aux langages de balisages HTML5 et CSS3.",
        "En 2019, j'ai obtenu mon baccalauréat de sciences et technologies de l'industrie et du développement durable spécialité système d'information et numérique, au lycée de Cachan à Cachan.",
        "Me voilà étudiant en deuxième année d'informatique à l'IUT de Paris, au cours de ma première année j'ai pu développer mes connaissances que j'avais pu acquérir au lycée, de plus avec un programme pluridisciplinaire celui-ci m'a permis d'accroître mon niveau en mathématiques, comptabilité, gestion de projet, etc.",
        "J'ai découvert un nouveau paradigme de programmation 'la programmation orientée objet' que j'affectionne particulièrement, cela permet de modéliser un problème sous forme d'objets. Pour valider ces connaissances nous avons pu effectuer des projets tels que des programmes en CLI, des interfaces, sites web que vous pouvez retrouver sur mon GitHub (cf. Contact).",
    ],
    enAbout: [
        "Computing has been exciting for me since I was a child and I decided to continue along this path to make it my job.",
        "During my high school years, I was able to learn some programming languages like C, C++ and learn HTML5 markup and CSS3.",
        "In 2019, I obtained my baccalaureate in Science and Technology of Industry and Sustainable Development specialization information system and digital, at the Cachan High School in Cachan.",
        "Here I am a second year student of computer science at the IUT of Paris, during my first year I was able to develop my knowledge that I had been able to acquire in high school, moreover with a multidisciplinary program that allowed me to increase my level in mathematics, accounting, project management, etc.",
        "I discovered a new programming paradigm 'object-oriented programming' that I particularly like, it allows to model a problem in the form of objects. To validate this knowledge we were able to carry out projects such as CLI programs, interfaces, websites that you can find on my GitHub (cf. Contact).",
    ]
};

interface Skill {
    src: string,
    alt: string,
    level: number
}

export const skills:Array<Skill> = [{
    src: "java.png",
    alt: "Java language",
    level: 70,
},
{
    src: "c.png",
    alt: "C language",
    level: 40,
},
{
    src: "cpp.png",
    alt: "C++ language",
    level: 40,
},
{
    src: "js.png",
    alt: "Javascript language",
    level: 70,
},
{
    src: "html5.png",
    alt: "HTML5 language",
    level: 90,
},
{
    src: "css3.png",
    alt: "CSS3 language",
    level: 70,
},
{
    src: "vb.png",
    alt: "VB language",
    level: 50,
},
{
    src: "sql.png",
    alt: "SQL language",
    level: 70,
},
{
    src: "php.png",
    alt: "PHP language",
    level: 60,
},
{
    src: "linux.png",
    alt: "Linux OS - CLI",
    level: 60,
}
];

interface Language {
    src: string,
    alt: string,
    object: string
}

export const languages:Array<Language> = [{
    src: "united-kingdom.svg",
    alt: "English",
    object: "Professional",
},
{
    src: "spain.svg",
    alt: "Spanish",
    object: "Intermediate",
},
{
    src: "portugal.svg",
    alt: "Portuguese",
    object: "Bilingual",
},
];