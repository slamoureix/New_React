import React from 'react'
import { useSelector } from 'react-redux';

import HomeSection from '../../Templates/HomeSection.jsx';

// datas 
import { developpementData as nameProject } from './data.js';

export default function Developement() {
    const DeveloppementRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DeveloppementReducer.Developpement
    }));
    return <HomeSection nameProject={nameProject} routes={DeveloppementRoutes} />
}
