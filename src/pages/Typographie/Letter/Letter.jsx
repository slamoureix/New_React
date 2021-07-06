import React, {useState } from 'react';
import { useSelector } from 'react-redux';

//component
import Nav from '../../../components/Navigation/Navigation';
import { letterData as nameProject } from './data';

import CreateImageGrid from '../../../useCreateImageGrid.jsx';
import Content from '../../../components/TemplateComponent/Content';


export default function Letter() {
    const [DatasImgState] = useState(nameProject.img.content);

    const TypographieRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.TypographieReducer.Typographie
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <section>
                <div className="head_row">
                <div className= "title"><h1>{nameProject.name}</h1></div>
                </div>
                <Content nameProjectProps = {nameProject}/>
            </section>

            <section className= {`${nameProject.name}__grid`}>
            {CreateImageGrid(DatasImgState, nameProject.name)}
            </section>
            <Nav rep= {nameProject.rep} routes= {TypographieRoutes}/>
        </article>
    )
}