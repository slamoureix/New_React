import Words from './Words';
import {img} from './imgDatas';

import {typographie, project } from '../../../config';

export const wordsData = {
    routes: {
        path: "/Words",
        typeofLink: project,
        component: Words
    },
    name: "Words",
    type: typographie,
    content: "",
    outils: "",
    rep: "Words",
    img: img
}