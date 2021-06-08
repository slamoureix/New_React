import React from 'react';
import {CreatePicture} from './scripts/CreatePicture';

export default function useCreateImageGrid(datasImage, repertory){
    const arrayDiv = [];
        for (let index = 0; index < datasImage.length; index++) {
            const element = datasImage[index];
            let li = 
                <li key = {index} className = {`${repertory}__item-${index}`}>
                {CreatePicture(repertory, element.src_default, element.sources, element.alt)}
                </li>
            arrayDiv.push(li);
        }
    return arrayDiv;
}