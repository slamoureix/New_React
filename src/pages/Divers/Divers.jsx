import React from 'react';
import { useSelector } from 'react-redux';

import HomeSection from '../../Templates/HomeSection.jsx';
// datas 
import {
    diversData as nameProject
} from './data.js';


export default function Divers() {
    const DiversRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.DiversReducer.Divers
    }));
    return <HomeSection nameProject={nameProject} routes={DiversRoutes} />
}








