import Number from './Number';
import { typographie, project } from '../../../config';

// iMGS 

import {number1} from './imgDatas/number1';
import {number2} from './imgDatas/number2';
import {number3} from './imgDatas/number3';
import {number4} from './imgDatas/number4';
import {number5} from './imgDatas/number5';
import { cover } from './imgDatas/cover';

export const numberData = {
    "routes": {
        "path": "/Number",
        "typeofLink": project,
        "component" : Number
    },
    "content":"Recherche graphique sur les nombres, concept permettant d'évaluer des quantités. Le parti-pris est ici d'utiliser des formes géometriques simples pleines ou filiformes et une grille de dimension variable.",
    "name": "Number",
    "type": typographie,
    "rep": "Number",
    "img": {
        "cover": cover,
        "content": [
            number1,
            number2,
            number3,
            number4,
            number5,
        ]
    }
}