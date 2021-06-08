import {
    xs,
    md,
    webp,
    jpg
} from '../../../../config';

export const construire = {
    "src_default": {
        name: "J5_construire_md",
        format: webp
    },
    "sources": [{
        "src": {
            name: "J5_construire_xs",
            format: webp
        },
        "media": xs
    }, {
        "src": {
            name: "J5_construire_md",
            format: webp
        },
        "media": md
    }, 
    
    // jpeg //
    
    {
        "src": {
            name: "J5_construire_xs",
            format: jpg
        },
        "media": xs
    }, {
        "src": {
            name: "J5_construire_md",
            format: jpg
        },
        "media": md
    }, ],
    "alt": "interieur du portfolio"
}