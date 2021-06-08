import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import Nav from '../../../components/Navigation/Navigation';
import useCreateImageGrid from '../../../useCreateImageGrid';

import { modishData as nameProject } from './data';


export default function Modish() {
    
        const [DatasImgState] = useState(nameProject.img.content);

    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section>
                <div className="head_row">
                    <div className= "title"><h1>{nameProject.name}</h1></div>
                </div>
            </section>
            <section className= {`${nameProject.name}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {UxUiRoutes}/>
        </article>
    )
    
}
