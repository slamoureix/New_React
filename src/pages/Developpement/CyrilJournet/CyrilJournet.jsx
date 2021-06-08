import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import DeveloppementTemplate from '../../../Templates/Developpement';
// datas 
import {cyrilJournetData as nameProject } from './data.js';

export default function CyrilJournet() {

    const [DatasImgState] = useState(nameProject.img.content);

    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return <DeveloppementTemplate nameProject={nameProject} datasImgState={DatasImgState} routesDeveloppement={DeveloppementRoutes}/>
}
