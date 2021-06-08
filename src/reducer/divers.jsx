import {UnVoyageInterieurData} from '../pages/Divers/UnVoyageInterieur/data'

export const DiversRoutes = {
        Divers: {
            UnVoyageInterieur: {
                path: UnVoyageInterieurData.routes.path,
                name: UnVoyageInterieurData.name,
                component: UnVoyageInterieurData.routes.component,
                rep:UnVoyageInterieurData.rep,
                typeofLink: UnVoyageInterieurData.routes.typeofLink,
                cover: UnVoyageInterieurData.img.cover,
            },
        },
}

export default function RoutesReducer(state = DiversRoutes) {
    return state;
}