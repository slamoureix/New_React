import Words from './Words';
import {img} from './imgDatas';

import {typographie, project, illustrator } from '../../../config';

export const wordsData = {
    routes: {
        path: "/Words",
        typeofLink: project,
        component: Words
    },
    name: "Words",
    type: typographie,
    content: "Expérimentation autour d'un mot ou d'une phrase signature, à mi-chemin entre le graffiti, le logo et le monogramme. L'idée et de faire résonner les mots de travailler les formes et de créer des jeux visuels.",
    outils: illustrator,
    rep: "Words",
    img: img
}