import Letter from './Letter';

import { typographie, project } from '../../../config';

// iMGS 
import {cover} from './imgDatas/cover';
import {letter01} from './imgDatas/letter-01';
import {letter02} from './imgDatas/letter-02';
import {letter03} from './imgDatas/letter-03';
import {letter04} from './imgDatas/letter-04';
import {letter05} from './imgDatas/letter-05';
import {letter06} from './imgDatas/letter-06';
import {letter07} from './imgDatas/letter-07';
import {letter08} from './imgDatas/letter-08';
import {letter09} from './imgDatas/letter-09';
import {letter10} from './imgDatas/letter-10';

export const letterData = {
    "routes": {
        "path": "/Letter",
        "typeofLink": project,
        "component" : Letter
    },
    "name": "Letter",
    "type": typographie,
    "content": "",
    "outils": "illustrator - photoshop",
    "rep": "Letter",
    "img": {
        "cover": cover,
        "content": [
            letter01,
            letter02,
            letter03,
            letter04,
            letter05,
            letter06,
            letter07,
            letter08,
            letter09,
            letter10,
        ]
    }
}