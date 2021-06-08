import {
    developement,
    project,
    techno,
    cptUi,
    php,
    acf,
    wordpress,
    greenSock,
    comp,
    javascript,
    devFrontBack,
    integration,
    responsive,
    animations
} from './../../../config';

import {
    img
} from './imgDatas';

import CyrilJournet from './CyrilJournet'


export const cyrilJournetData = {
    routes: {
        path:"/CyrilJournet",
        typeofLink: project,
        component: CyrilJournet
    },
    name: "Cyril Journet",
    type: developement,
    content: "Développement complet du site internet pour le chorégraphe Cyril Journet. Cette carte de visite numérique permet aux visiteurs de découvrir son univers, ses projets, son parcours et ses actualités. Le design a été réalisé par l'agence Cerise Noire.",
    techno : {
        title: techno,
        technos: [php, wordpress, acf, cptUi, javascript ,greenSock, ]
    },
    competence : {
        title: comp,
        comp: [devFrontBack, integration, responsive, animations]
    },
    year: "2021",
    adress: "https://www.cyriljournet.com/",
    rep: "CyrilJournet",
    img: img

}
