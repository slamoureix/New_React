import {portraitsDeLoireData} from '../pages/Graphisme/PortraitsDeLoire/data.js'


export const GraphismeRoutes = {
    Graphisme: {
        PortraitsDeLoire: {
            path: portraitsDeLoireData.routes.path,
            name: portraitsDeLoireData.name,
            component: portraitsDeLoireData.routes.component,
            rep: portraitsDeLoireData.rep,
            typeofLink: portraitsDeLoireData.routes.typeofLink,
            cover: portraitsDeLoireData.img.cover,
        },
    },
}

export default function RoutesReducer(state = GraphismeRoutes) {
    return state;
}