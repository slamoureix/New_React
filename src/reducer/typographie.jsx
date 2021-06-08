import {letterData} from '../pages/Typographie/Letter/data';
import {wordsData} from '../pages/Typographie/Words/data';
import {numberData} from '../pages/Typographie/Number/data';

export const TypoRoutes = {
    Typographie: {
        Letter: {
            path: letterData.routes.path,
            name: letterData.name,
            component: letterData.routes.component, 
            rep: letterData.rep,
            typeofLink: letterData.routes.typeofLink,
            cover: letterData.img.cover,
        },
        Words: {
            path: wordsData.routes.path,
            name: wordsData.name,
            rep: wordsData.rep,
            typeofLink: wordsData.routes.typeofLink,
            component: wordsData.routes.component,
            cover: wordsData.img.cover,
        },
        Number: {
            path: numberData.routes.path,
            name: numberData.name,
            rep: numberData.rep,
            typeofLink: numberData.routes.typeofLink,
            component: numberData.routes.component,
            cover: numberData.img.cover,
        },
    },
}


export default function RoutesReducer(state = TypoRoutes) {
    return state;
}