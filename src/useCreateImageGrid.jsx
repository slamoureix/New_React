import React from 'react';
import {CreatePicture} from './scripts/CreatePicture';
import uuid from 'react-native-uuid';

export default function useCreateImageGrid(datasImage, repertory){
    const arrayDiv = [];
    let count = 0;

        datasImage.forEach(el => {
            let li = <li key = {uuid.v4()} className={`${repertory}__item-${count}`}>
            {CreatePicture(repertory, el.src_default, el.sources, el.alt)} </li>;
            count ++
            arrayDiv.push(li)
        });
    return arrayDiv;
}