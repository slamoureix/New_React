import React, { useState } from 'react'
import { useSelector } from 'react-redux';

// import Preview from '../../../components/Preview/Preview';

import Nav from '../../../components/Navigation/Navigation';
import useCreateImageGrid from '../../../useCreateImageGrid';

import { moderneData as nameProject } from './data';

// const CreateImageGrid = React.lazy(() => import('../../../scripts/CreateImageGrid'));

export default function Moderne() {

    
    const [DatasImgState] = useState(nameProject.img.content);

    const UxUiRoutes = useSelector(({AllRoutesReducer}) => ({
        ...AllRoutesReducer.UxUiReducer.UxUi
    }));

    return (
        <article className= {`${nameProject.name}__project_container`}>
            <header className="__head_row">
                <div className= "title"><h1>{nameProject.name}</h1></div>
            </header>
            <section className= {`${nameProject.name}__grid`}>{useCreateImageGrid(DatasImgState, nameProject.rep)}</section>
            <Nav rep= {nameProject.rep} routes= {UxUiRoutes}/>
        </article>
    )
    
}
