import {
    art,
    project,
    comp,
    photographie,
    ecriture
} from '../../../config';

import {
    img
} from './imgDatas';

import UnVoyageInterieur from './UnVoyageInterieur';
import TextPoetique from './Textpoetique';


export const UnVoyageInterieurData = {
    routes: {
        path: "/UnVoyageInterieur",
        typeofLink: project,
        component: UnVoyageInterieur
    },
    name: "Un voyage intérieur",
    type: art,
    content: "Un voyage intérieur est une installation réalisée dans le cadre de l'exposition Totem, organisée par l'association le Tube à la carrosserie HH Service à Strasbourg le 13 Mai 2017. 12 cyanotypes et un texte poétique écrit lors d'état second.",
    texte: TextPoetique,
    competence: {
        title: comp,
        comp: [art, photographie, ecriture]
    },
    year: "2017",
    form: "dimensions variables",
    rep: "UnVoyageInterieur",
    img: img

}