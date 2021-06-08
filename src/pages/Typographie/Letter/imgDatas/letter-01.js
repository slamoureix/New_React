import {
    jpg,
    lg,
    md,
    webp,
    xl,
    xs,
    xxl,
} from '../../../../config';

const name = 'letter-01';

export const letter01 = {
    "src_default": {
        name: `${name}_xxl`,
        format: webp
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
        {
            "src": {
                name: `${name}_xxl`,
                format: webp
            },
            "media": xxl
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