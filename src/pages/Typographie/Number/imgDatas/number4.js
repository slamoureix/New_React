import {
    jpg,
    lg,
    md,
    webp,
    xl,
    xs,
    xxl,
} from '../../../../config';

const name = 'Number4';

export const number4 = {
    "src_default": {
        name: `${name}_xxl`,
        format: jpg
    },
    "sources": [{
            "src": {
                name: `${name}_xs`,
                format: webp
            },
            "media": xs
        },
        {
            "src": {
                name: `${name}_md`,
                format: webp
            },
            "media": md
        },
        {
            "src": {
                name: `${name}_lg`,
                format: webp
            },
            "media": lg
        },
        {
            "src": {
                name: `${name}_xl`,
                format: webp
            },
            "media": xl
        },
        

        // jpg 
        {
            "src": {
                name: `${name}_xs`,
                format: jpg
            },
            "media": xs
        },
        {
            "src": {
                name: `${name}_md`,
                format: jpg
            },
            "media": md
        },
        {
            "src": {
                name: `${name}_lg`,
                format: jpg
            },
            "media": lg
        },
        {
            "src": {
                name: `${name}_xl`,
                format: jpg
            },
            "media": xl
        },
        {
            "src": {
                name: `${name}_xxl`,
                format: jpg
            },
            "media": xxl
        }
    ],
    "alt": "interieur du portfolio"
}