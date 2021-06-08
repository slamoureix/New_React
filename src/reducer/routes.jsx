// COMPONENTS //
import Competences from '../pages/Competences/Competences'
import Contact from '../pages/Contact/Contact';
import Legals from '../pages/Legals/Legals';

import Home from '../pages/Home/Home';

// Config
import {
    external
} from '../config.js'

/*
    utilisation d'un tableau associatif -> utilisable avec la boucle for... In 
*/

export const routes = {
    Home: {
        home: {
            path: '/',
            name: 'Accueil',
            component: Home,
            target: '_self',
        },
    },
    Legals: {
        Legals: {
            path: '/Legals',
            name: 'Mentions Légales',
            component: Legals,
            target: '_self',
        },
        // Political: {
        //     path: '/Legals',
        //     name: 'Mentions Légales',
        //     component: Legals,
        //     target: '_self',
        // }
    },

    Nav: {
        Comp: {
            path: '/Competences',
            name: 'Compétences',
            component: Competences,
            target: '_self',
        },
        Lab: {
            path: 'https://codepen.io/seb_lam',
            name: 'Lab',
            target: '_blank',
            typeofLink: external
        },
        Contact: {
            path: '/Contact',
            name: 'Contact',
            component: Contact,
            target: '_self',
        },
    },
    
    Social: {
        Instagram: {
            path: 'https://www.instagram.com/slamoureix/?hl=fr',
            name: 'Instagram',
            target: '_blank',
            typeofLink: external
        },
        Behance: {
            path: 'https://www.behance.net/sebastien_lamoureix',
            name: 'Behance',
            target: '_blank',
            typeofLink: external
        },
        Linkedin: {
            path: 'https://www.linkedin.com/in/sebastien-lamoureix-2642801a/',
            name: 'Linkedin',
            target: '_blank',
            typeofLink: external
        }
    }
}

export default function RoutesReducer(state = routes) {
    return state;
}

