import {developpementData} from '../pages/Developpement/data';
import {devRoutes} from './developpement'
import {typoData} from '../pages/Typographie/data';
import {typoRoutes} from './typographie.jsx'
import {uxUiData} from '../pages/UxUi/data';
import {UxUiRoutes} from './uxui.jsx'
import {editionData} from '../pages/Graphisme/data';
import {GraphismeRoutes} from './graphisme.jsx'
import {diversData} from '../pages/Divers/data';
import {DiversRoutes} from './divers.jsx'


export const HomeProject = 
    [
        [developpementData, devRoutes.Developpement],
        [uxUiData, UxUiRoutes.UxUi],
        [typoData, typoRoutes.Typographie],
        [editionData, GraphismeRoutes.Graphisme],
        [diversData, DiversRoutes.Divers],
    ]

export default function RoutesReducer(state = HomeProject) {
    return state;
}