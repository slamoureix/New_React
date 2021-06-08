import {underProject, art, ecriture, photographie} from '../../config';
import Divers from './Divers';

export const diversData = {
    routes: {
        path: "/Divers",
        typeofLink: underProject,
        component : Divers
    },
    name: "Divers",
    type: [art, ecriture, photographie],
    rep: "Divers",
}
