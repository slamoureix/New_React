import React from 'react';
import { useSelector } from 'react-redux';
import HomeSection from '../../Templates/HomeSection.jsx';

// datas 
import { editionData as nameProject } from './data.js';

//Components

export default function Edition() {
    
    const GraphismeRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.GraphismeReducer.Graphisme
    }));
    return <HomeSection nameProject={nameProject} routes={GraphismeRoutes} />
}
