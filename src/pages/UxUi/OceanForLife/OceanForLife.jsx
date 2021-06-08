import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import Nav from '../../../components/Navigation/Navigation';
import useCreateImageGrid from '../../../useCreateImageGrid';



import { oceanForLifeData as nameProject } from './data';



export default function OceanForLife() {
    const [DatasImgState] = useState(nameProject.img.content);
    
    const UxUiRoutes = useSelector(({
        AllRoutesReducer
    }) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return (
        <article className= {`${nameProject.rep}__project_container`}>
                <header className="head_row">
                    <div className= "title"><h1>{nameProject.name}</h1></div>
                </header>
            <section className= {`${nameProject.rep}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {UxUiRoutes}/>
        </article>
    )
    
}
