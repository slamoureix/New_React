import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DeveloppementTemplate from '../../../Templates/Developpement';

// datas 
import {landscapeData as nameProject } from './data.js';

export default function Landscape() {
    const [DatasImgState] = useState(nameProject.img.content);
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));

    return <DeveloppementTemplate nameProject = {nameProject} datasImgState = {DatasImgState} routesDeveloppement = {DeveloppementRoutes}
    />
}