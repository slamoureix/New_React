import YourLookIsGood from './YourLookIsGood';
import {
    img
} from './imgDatas';

import {
    developement,
    project,
    devFrontBack,
    integration,
    responsive,
    php,
    wordpress,
    javascript,
    greenSock,
    simpleParallax,
    scrollMagic,
    sass,
    bootstrap,
    acf,
    
    animations,
    techno,
    comp
} from './../../../config';

export const yourLookIsGoodData = {
    routes: {
        path: "/YourLookIsGood",
        typeofLink: project,
        component: YourLookIsGood
    },
    name: "Your Look Is Good",
    type: developement,
    content: "Your Look is Good est un blog de tendance vestimentaire fictif réalisé dans le cadre de mon stage de fin de formation au sein de l'agence Danka. Le design a été réalisé par Guillaume Bonnecase, directeur artistique de l'agence et mon tuteur de stage. Durant la réalisation de ce projet j'ai été aidé par deux développeurs de l'agence.",
    techno: {
        title: techno,
        technos: [php, wordpress, acf, javascript, greenSock, simpleParallax, scrollMagic, sass, bootstrap]
    },
    competence: {
        title: comp,
        comp: [devFrontBack, integration, responsive, animations]
    },
    year: "2020",
    adress: "https://YourLookIsGood.com",
    rep: "YourLookIsGood",
    img: img
}