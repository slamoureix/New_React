import {
    All,
    webp,
    jpg
} from '../../../../config';

const name = "CoverProjectAll";

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

    "alt": "Page principale du site internet qui represente un site de mode"
}