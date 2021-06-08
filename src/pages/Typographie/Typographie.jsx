import React from 'react';
import {useSelector} from 'react-redux';

// datas 
import { typoData as nameProject } from './data.js';
// component
import HomeSection from '../../Templates/HomeSection';

export default function Typographie() {
    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));
    return <HomeSection nameProject={nameProject} routes={TypographieRoutes} />
}


