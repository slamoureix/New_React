import {yourLookIsGoodData} from './../pages/Developpement/YourLookIsGood/data';
import {cyrilJournetData} from './../pages/Developpement/CyrilJournet/data';
import {landscapeData} from './../pages/Developpement/Landscape/data';

export const devRoutes = {
    Developpement: {
            YourLookIsGood: {
                path:yourLookIsGoodData.routes.path,
                name: yourLookIsGoodData.name,
                component: yourLookIsGoodData.routes.component,
                rep: yourLookIsGoodData.rep,
                typeofLink: yourLookIsGoodData.routes.typeofLink,
                cover: yourLookIsGoodData.img.cover,
            },
            CyrilJournet: {
                path:cyrilJournetData.routes.path,
                name: cyrilJournetData.name,
                component: cyrilJournetData.routes.component,
                rep: cyrilJournetData.rep,
                typeofLink: cyrilJournetData.routes.typeofLink,
                cover: cyrilJournetData.img.cover,
            },

            Landscape: {
                path:landscapeData.routes.path,
                name: landscapeData.name,
                component: landscapeData.routes.component,
                rep: landscapeData.rep,
                typeofLink: landscapeData.routes.typeofLink,
                cover: landscapeData.img.cover,
            },
        }
}

export default function RoutesReducer(state = devRoutes) {
    return state;
}