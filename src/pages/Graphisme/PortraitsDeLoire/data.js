import PortraitDeLoire from './PortraitDeLoire';
import {
    img
} from './imgDatas';

import {
    project,
    techno,
    comp,
    indesign,
    edition
} from './../../../config';

export const portraitsDeLoireData = {
    routes: {
        path: "/PortraitDeLoire",
        typeofLink: project,
        component: PortraitDeLoire
    },
    name: "Portraits De Loire",
    type: edition,
    content: 'Conception graphique et direction artistique de l\'ouvrage "Portraits De Loire" pour l\'artiste Véronique Popinet paru aux éditions Libel. La mise en page suit un patern alterne des paysages en pleine page, des fragements photographiques, des portraits, des témoignages et des textes écrit par quatre co-auteurs apportant une vision sur le thème du paysage.',
    techno: {
        title: techno,
        technos: [indesign]
    },
    competence: {
        title: comp,
        comp: [edition, "Mise en page", "Direction artistique"]
    },
    year: "2020",
    adress: "https://issuu.com/libel/docs/portraits_de_loire_veronique_popine",
    rep: "PortraitsDeLoire",
    img: img
}