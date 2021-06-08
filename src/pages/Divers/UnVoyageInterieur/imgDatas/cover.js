import {
    All,
    webp,
    jpg
} from '../../../../config';

const name = "cover";

export const cover = {

    "src_default": {
        name: name,
        format: webp
    },

    "sources": [{
            "src": {
                name: name,
                format: webp
            },
            "media": All
        },
        /* jpg */
        {
            "src": {
                name: name,
                format: jpg
            },
            "media": All
        }

    ],

    "alt": "Vue d'un cyanotype rapproché"
}