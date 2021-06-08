import React from 'react'
import {CreatePicture} from '../../scripts/CreatePicture';

export default function BoxImg(props) {
    return (
        <div className= {`${props.repertory}__item-${props.index}`}> {
            CreatePicture(props.repertory, props.src_default, props.sources, props.alt)
            }
        </div>
    )
}
