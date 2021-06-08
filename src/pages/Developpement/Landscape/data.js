import Landscape from './Landscape';
import {
    img
} from './imgDatas';

import {
    animCss,
    comp,
    developement,
    devFrontBack,
    integration,
    project,
    react,
    responsive,
    techno,
    javascript,
    jsx,
    webdesigning
} from './../../../config';

export const landscapeData = {
    routes: {
        path: "/Landscape",
        typeofLink: project,
        component: Landscape
    },
    name: "Landscape",
    type: developement,
    content: `Creation graphique de l'interface utilisateur, intégration et développement d'un diaporama d'images autour du thème des paysages. 
    Utilisation de l'api unsplash pour la récupération des données.
    Intégration d'un système de colorpicker qui récupère les couleurs principales de l'image et les retranscrient dans les pastilles sous forme de dégradé.`,
    techno: {
        title: techno,
        technos: [react, animCss, javascript, jsx]
    },
    competence: {
        title: comp,
        comp: [webdesigning, devFrontBack, integration, responsive]
    },
    year: "2021",
    adress: "https://sebastienlamoureix.fr/landscape/index.html",
    rep: "Landscape",
    img: img
}